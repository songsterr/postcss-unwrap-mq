module.exports = (opts = {}) => {
  const {
    regex = undefined
  } = opts

  if (!regex) {
    return {
      postcssPlugin: 'postcss-unwrap-mq'
    }
  }

  return {
    postcssPlugin: 'postcss-unwrap-mq',
    AtRule (atrule) {
      const test = new RegExp(regex)
      const matched = test.test(atrule.params)
      if (matched) {
        atrule.walkRules(rule => {
          atrule.parent.insertBefore(atrule, rule)
        })
        atrule.remove()
      }
    }
  }
}

module.exports.postcss = true
