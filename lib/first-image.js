const { JSDOM } = require('jsdom')

module.exports = html => {
  // Parse the HTML
  const frag = JSDOM.fragment(html)

  const img = frag.querySelector('img')

  if (img) {
    return img.src
  }
}
