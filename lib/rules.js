module.exports = {
  slackLink: {
    filter: function (node, options) {
      return (
        options.linkStyle === 'slack' &&
        node.nodeName === 'A' &&
        node.getAttribute('href')
      )
    },

    replacement: function (content, node) {
      var href = node.getAttribute('href')
      return `<${href}|${content}>`
    }
  },

  // Slack doesn't support headings, so we'll just make them all bold
  heading: {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    replacement: content => `*${content}*`
  }
}
