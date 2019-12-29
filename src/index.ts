import path from 'path'
import * as vscode from 'vscode'
import { BrowserCompletionProvider } from './provider'
import { getCacheDir, mkdirAsync, statAsync } from './util'
import Server from './server'

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  let { subscriptions } = context

  const config = vscode.workspace.getConfiguration('browserCompletion')
  const filetypes = config.get<string[]>('filetypes', ['*'])
  let capacity = config.get<number>('capacity', 5)
  if (capacity <= 0 || capacity >= 10) {
    capacity = 5
  }

  const cacheDir = getCacheDir()
  const sourceDir = path.join(cacheDir, 'vscode-browser-completion')
  const stat = await statAsync(sourceDir)
  if (!stat || !stat.isDirectory()) {
    await mkdirAsync(sourceDir)
  }

  const server = new Server(capacity, sourceDir)
  await server.start()
  const browserCompletionProvider = new BrowserCompletionProvider(server)

  subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      filetypes,
      browserCompletionProvider
    )
  )
}
