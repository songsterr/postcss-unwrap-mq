module.exports = (opts = {}) => {
  // eslint-disable-next-line prefer-let/prefer-let
  const {
    regex = undefined
  } = opts

  if (!regex) {
    return {
      postcssPlugin: 'postcss-unwrap-mq',
    }
  }

  return {
    postcssPlugin: 'postcss-unwrap-mq',
    AtRule(atrule) {
      // eslint-disable-next-line security/detect-non-literal-regexp
      let test = new RegExp(regex)
      let matched = test.test(atrule.params)
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
