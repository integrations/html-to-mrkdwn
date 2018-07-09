const {JSDOM} = require('jsdom')

module.exports = (html, options) => {
  const frag = JSDOM.fragment(html)
  if (options.trimAt) {
    const node = frag.querySelector(options.trimAt)
    if (node) {
      removeAllStartingAt(node)
    }
  }
  return frag
}

function removeAllStartingAt (node) {
  while (node) {
    let nextNode = node.nextSibling
    if (!nextNode && node.parentNode) {
      nextNode = node.parentNode.nextSibling
    }
    node.parentNode.removeChild(node)
    node = nextNode
  }
}
