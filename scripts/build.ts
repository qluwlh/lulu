import path from 'path'
import fs from 'fs-extra'
import run from './run'

const OUTPUT_FOLDER = 'dist'
const PKG = 'package.json'

const copyPackageJson = async () => {
  const res = await fs.readFile(PKG, 'utf8')
  const packageJson = JSON.parse(res)
  const { config, 'lint-staged': lintStaged, devDependencies, scripts, ...clone } = packageJson
  await fs.writeFile(path.join(OUTPUT_FOLDER, PKG), JSON.stringify(clone, null, 2))
}
const FILES = ['CHANGELOG.md', 'LICENSE', 'README.md'] as const

const copyFiles = async () => {
  await Promise.all(FILES.map((file) => fs.copyFile(file, path.resolve(OUTPUT_FOLDER, file))))
}

const build = async () => {
  await copyPackageJson()
  await copyFiles()
}

run(build)
