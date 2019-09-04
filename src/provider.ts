import { readFileAsync, readdirAsync } from './util'
import path from 'path'
import Server from './server'
import * as vscode from 'vscode'

export class BrowserCompletionProvider implements vscode.CompletionItemProvider {
  private sourceDir: string
  constructor(server: Server) {
    this.sourceDir = server.sourceDir
  }

  public async provideCompletionItems(
    _document: vscode.TextDocument,
    _position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext,
  ): Promise<vscode.CompletionItem[]> {
    const words = await this.gatherCandidates()
    return words.map<vscode.CompletionItem>(word => ({
      label: word,
      kind: vscode.CompletionItemKind.Text,
      detail: 'Browser Completion',
      insertText: word,
    }))
  }

  private async gatherCandidates(): Promise<string[]> {
    const words: string[] = []
    const files = await readdirAsync(this.sourceDir)
    let sourcePath: string
    let content: string
    for (const file of files) {
      sourcePath = path.join(this.sourceDir, file)
      content = await readFileAsync(sourcePath)
      words.push(...content.split(/\n/))
    }
    return [...new Set(words)]
  }
}
