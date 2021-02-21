require('dotenv').config()
const auth = require('../handlers/get-badgr-credentials')

const main = () => {
  const runAuth = async () => {
    await auth()
  }
  runAuth()
}

main()