let postcss = require('postcss')

module.exports = postcss.plugin('postcss-unwrap-mq', (opts = { }) => {
  const {
    regex
  } = opts

  return (root, result) => {
    if (!regex) {
      return
    }

    root.walkAtRules('media', atrule => {
      const test = new RegExp(regex)
      const matched = test.test(atrule.params)
      if (matched) {
        atrule.walkRules(rule => {
          atrule.parent.append(rule)
        })
        atrule.remove()
      }
    })
  }
})
