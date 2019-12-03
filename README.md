# PostCSS Unwrap Mq

[PostCSS] plugin to extract matched media queries to their parents.

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
