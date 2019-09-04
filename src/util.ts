import fs from 'fs'
import path from 'path'
import util from 'util'

export async function statAsync(filepath: string): Promise<fs.Stats | null> {
  let stat = null
  try {
    stat = await util.promisify(fs.stat)(filepath)
  } catch (e) {
    // noop
  }
  return stat
}

export async function writeFileAsync(fullpath: string, content: string): Promise<void> {
  await util.promisify(fs.writeFile)(fullpath, content, 'utf8')
}

export function readFileAsync(fullpath: string, encoding = 'utf8'): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(fullpath, encoding, (err, content) => {
      if (err) reject(err)
      resolve(content)
    })
  })
}

export function mkdirAsync(filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.mkdir(filepath, err => {
      if (err) return reject(err)
      resolve()
    })
  })
}

export function readdirAsync(path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) return reject(err)
      resolve(files)
    })
  })
}

export function getCacheDir(): string {
  let cacheDir: string
  const platform = process.platform
  switch (platform) {
    case 'win32':
      cacheDir = path.join(process.env.LOCALAPPDATA || process.env.APPDATA, '{1}', '{0}', 'Cache')
      break
    case 'darwin':
      cacheDir = path.join(process.env.HOME, 'Library', 'Caches', '{0}')
      break
    case 'linux':
      cacheDir = path.join(process.env.HOME, '.cache')
      break
    default:
      break
  }
  return cacheDir
}
