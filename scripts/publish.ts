import { exec } from 'child_process'
import run from './run'

const DIST = 'dist'

const release = () =>
  new Promise((resolve, reject) => {
    exec(
      'npm publish',
      {
        cwd: DIST,
      },
      (err) => {
        if (err !== null) {
          return reject(err)
        }
        return resolve(undefined)
      }
    )
  })

run(release)
