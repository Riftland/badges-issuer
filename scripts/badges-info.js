require('dotenv').config()
const getBadgesInfo = require('../handlers/get-all-badges-info')
const auth = require('../handlers/get-badgr-credentials')

getBadgesInfo(auth())