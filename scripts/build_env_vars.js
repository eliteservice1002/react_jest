const childProcess = require('child_process')
const fs = require('fs')
const fsPromises = fs.promises

function ensureDoubleDigit(number) {
  return number < 10 ? `0${number}` : number
}

const packageVersion = process.env.npm_package_version

async function writeAppVersion() {
  // determine version
  let version = ''
  if (process.env.NODE_ENV !== 'development') {
    version = packageVersion
  } else {
    const lastCommitDate = childProcess.execSync('git log -1 --format=%ct').toString().trim()
    const parsedDate = new Date(parseInt(lastCommitDate, 10) * 1000)
    const year = parsedDate.getUTCFullYear()
    const month = ensureDoubleDigit(parsedDate.getUTCMonth() + 1)
    const day = ensureDoubleDigit(parsedDate.getUTCDate())
    const lastCommitDateFormat = `${year}${month}${day}`

    const lastCommitSha = childProcess.execSync('git rev-parse --short HEAD').toString().trim()
    const branch = childProcess.execSync('git branch --show-current').toString().trim()
    version = `${packageVersion}.${branch}-${lastCommitDateFormat}-${lastCommitSha}`
  }

  // write to env.local
  const envPath = '.env.local'
  const content = `NEXT_PUBLIC_APP_VERSION=${version}`

  try {
    const data = await fsPromises.readFile(envPath, 'utf8')

    if (data.includes('NEXT_PUBLIC_APP_VERSION')) {
      const newContent = data.replace(/NEXT_PUBLIC_APP_VERSION=.+/g, content)
      await fsPromises.writeFile(envPath, newContent, 'utf8')
    } else {
      await fsPromises.appendFile(envPath, content, 'utf8')
    }
  } catch (err) {
    return console.error(err)
  }
}

writeAppVersion()
