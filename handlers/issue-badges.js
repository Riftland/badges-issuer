const { issueBadge } = require('../services')
const { getAssertUrl, getPatternBy } = require('../utils')
const {
  readBadges,
  findBy,
  updateBy,
  saveBadges,
  getEmails,
} = require('../db')

const issuer = async (credentials, entityId, badgeName) => {
  async function* issuerGen(credentials, url, badge) {
    console.info(`======\n Badge: ${badge}\n======`)
    for(let email of getEmails()) {
      const result = await issueBadge(credentials, url, { ...getPatternBy(email) })
      yield { ...result?.status, email, badge }
    }
  }

  const issuer = issuerGen(credentials, getAssertUrl(entityId), badgeName)

  for await(let result of issuer) {
    console.info('> issue badge result: ', result)
  }
}

module.exports = badgesToGive => async auth => {
  try {
    return await Promise.all(badgesToGive.map(async badge => {
      const { entityId, given } = readBadges(findBy, badge)

      if(given) throw new Error(`the badge ${badge} was given`)

      await issuer(await auth, entityId, badge)

      saveBadges(readBadges(), updateBy, entityId)
    }))
  } catch(error) {
    console.error('> error: ', error.message)
  }
}