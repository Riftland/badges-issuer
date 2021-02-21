require('dotenv').config()
const auth = require('../handlers/get-badgr-credentials')
const issueBadge = require('../handlers/issue-badges')
const { checkBadges } = require('../middlewares')

issueBadge(checkBadges())(auth())
