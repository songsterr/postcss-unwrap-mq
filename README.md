# PostCSS Unwrap Mq

[PostCSS] plugin to extract matched media queries to their parents.

![version](https://img.shields.io/npm/v/postcss-unwrap-mq?style=flat-square)
![node-current](https://img.shields.io/node/v/postcss-unwrap-mq?style=flat-square)
![npm](https://img.shields.io/npm/dt/postcss-unwrap-mq?style=flat-square)
![licence](https://img.shields.io/npm/l/postcss-unwrap-mq?style=flat-square)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/postcss-unwrap-mq?style=flat-square)

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    /* Input example */
}

@media print {
  .bar {
  }
}
```

```css
.foo {
  /* Output example */
}

.bar {
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-unwrap-mq')({
+     regex: /print/,
+   }),
    require('autoprefixer'),
  ],
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
