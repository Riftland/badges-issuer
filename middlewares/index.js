const checkBadges = () => {
  const [_, __, ...badgesToGive] = process.argv
    if(!badgesToGive.length) {
      throw new Error('At least one badge must be indicated!')
    }
  
    console.info('> badges to give: ', badgesToGive)
  
    return badgesToGive
}

module.exports = {
  checkBadges
}