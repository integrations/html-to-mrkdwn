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
  },

  taskListItems: {
    filter: function (node) {
      return node.type === 'checkbox' && node.parentNode.nodeName === 'LI'
    },

    replacement: function (content, node) {
      return node.checked ? '☑︎' : '☐'
    }
  },

  listItem: {
    filter: 'li',
    replacement: function (content, node, options) {
      content = content
        .replace(/^\n+/, '') // remove leading newlines
        .replace(/\n+$/, '\n') // replace trailing newlines with just a single one
        .replace(/\n/gm, '\n    ') // indent
      var prefix = options.bulletListMarker + ' '
      var parent = node.parentNode
      if (node.className.indexOf('task-list-item') >= 0) {
        prefix = ''
      } else if (parent.nodeName === 'OL') {
        var start = parent.getAttribute('start')
        var index = Array.prototype.indexOf.call(parent.children, node)
        prefix = (start ? Number(start) + index : index + 1) + '. '
      }
      return (
        prefix + content.trim() + (node.nextSibling && !/\n$/.test(content) ? '\n' : '')
      )
    }
  }
}
