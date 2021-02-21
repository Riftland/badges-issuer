const fs = require('fs')
const { BADGES_PATH, EMAILS_PATH, CREDENTIALS_PATH } = require('../constants')

function updateBy(entityId, list) {
  return (list || this).map(item => {
    if(item.entityId === entityId) {
      item.given = true
    }
    return item
  })
}

function findBy(name, list) {
  return (list || this).find(item =>
    item.name.toLowerCase() === name.toLowerCase()
  )
}

const readBadges = (action, condition) => {
  try {
    const badges = JSON.parse(fs.readFileSync(BADGES_PATH))
    if(action) {
      const result = action.call(badges, condition)
      if(!result) throw new Error('badge not found!')
      return result
    }
    return badges
  } catch(error) {
    console.info('> error reading badges from badges.json: ', error.message)
    return null
  }
}

const saveBadges = (list, action, condition) => {
  try {
    if(action) {
      list = action.call(list, condition)
    }
    fs.writeFileSync(BADGES_PATH, JSON.stringify(list))
    return list
  } catch(error) {
    console.info('> error saving badges into badges.json: ', error.message)
    return nul
  }
}

const getEmails = () => {
  try {
    return JSON.parse(fs.readFileSync(EMAILS_PATH))
  } catch(error) {
    console.info('> error retrieving data from emails.json: ', error.message)
    return null
  }
}

const saveCredentials = ({ data }) => {
  try {
    fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(data))
    console.info('> credentials saved!')
    return data
  } catch(error) {
    console.info('> error saving credentials in credentials.json: ', error.message)
    return null
  }
}

const readCredentials = () => {
  try {
    return JSON.parse(fs.readFileSync(CREDENTIALS_PATH))
  } catch(error) {
    console.info('> error reading credentials from credentials.json: ', error.message)
    return null
  }
}

module.exports = {
  findBy,
  updateBy,
  readBadges,
  saveBadges,
  getEmails,
  saveCredentials,
  readCredentials
}