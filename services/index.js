const axios = require('axios')
const { BADGR_GET_TOKEN_URL, BADGR_BASIC_URL } = require('../constants')

const issueBadge = async ({ access_token }, url, data) => {
  try {
    const result = await axios({
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      url,
      data,
    })

    return result.data
  } catch(error) {
    console.error('> something went wrong: ', error.message)

    return { success: false, description: error.message }
  }
}

const getCredentials = async data => {
  try {
    return await axios({
      method: 'POST',
      url: BADGR_GET_TOKEN_URL,
      data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
  } catch(error) {
    console.error('> something happens: ', error.message)
    return null
  }
}

const getBadgesInfo = async ({ access_token }) => {
  try {
    return await axios({
      method: 'GET',
      url: BADGR_BASIC_URL,
      headers: { 'Authorization': `Bearer ${access_token}` }
    })
  } catch(error) {
    console.error('> error getting all badges: ', error.message)
    return null
  }
}

module.exports = {
  issueBadge,
  getCredentials,
  getBadgesInfo
}