const qs = require('qs')
const { BADGR_BASIC_URL } = require('../constants')

const getPatternBy = identity => ({
  "recipient": {
    "identity": identity,
    "type": "email",
    "hashed": true
  },
  "notify": true
})

const getBodyData = () => qs.stringify({
  'username': process.env.USERNAME,
  'password': process.env.PASSWORD
})

const getAssertUrl = entityId => `${BADGR_BASIC_URL}/${entityId}/assertions`

module.exports = {
  getPatternBy,
  getBodyData,
  getAssertUrl
}