const fs = require('fs')
const { getBadgesInfo } = require('../services')
const { saveBadges } = require('../db')

module.exports = async auth => {
  const badgesInfo = await getBadgesInfo(await auth)

  const list = badgesInfo?.data?.result?.map(
    ({ name, description, entityId, openBadgeId }) =>
    ({ name, description, entityId, openBadgeId, given: false })
  )

  saveBadges(list)

  console.info('> done!')
}