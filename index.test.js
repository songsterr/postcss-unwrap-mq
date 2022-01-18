/* eslint-env jest */
const postcss = require('postcss')

const plugin = require('./')

function run (input, output, opts) {
  const result = postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('removes matched atrules', () => {
  run(
    `.foo {
      color: red;
    }

    @media print {
      .bar {
        color: black;
      }
    }`,
    `.foo {
      color: red;
    }

    .bar {
        color: black;
      }`,
    {
      regex: /print/
    }
  )
})

it('keeps other atrules', () => {
  run(
    `.foo {
      color: red;
    }

    @media print {
      .bar {
        color: black;
      }
    }`,
    `.foo {
      color: red;
    }

    @media print {
      .bar {
        color: black;
      }
    }`,
    {
      regex: /mobile/
    }
  )
})
