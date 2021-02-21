const { getCredentials } = require('../services')
const { saveCredentials, readCredentials } = require('../db')
const { getBodyData } = require('../utils')

const getCredentialsAndSave = async () => {
  response = await getCredentials(getBodyData())
  if(!response) return null
  return saveCredentials(response)
}

module.exports = async () => {
  let credentials = readCredentials()
  if(!credentials) {
    console.info('> getting new credentials...')
    credentials = await getCredentialsAndSave()
  }
  console.info('> credentials: ', credentials)
  return credentials
}