const TurnDown = require('turndown')
const { strikethrough, taskListItems, tables } = require('turndown-plugin-gfm')

const firstImage = require('./first-image')
const rules = require('./rules')

const service = new TurnDown({
  bulletListMarker: '•',
  strongDelimiter: '*',
  emDelimiter: '_',
  codeBlockStyle: 'fenced',
  linkStyle: 'slack'
})

// override escaping
// https://api.slack.com/docs/message-formatting#how_to_escape_characters
service.escape = (string) => (
  string.replace('&', '&amp;')
    .replace('<', '&lt;')
    .replace('>', '&gt;')
)

service.use(strikethrough)
service.use(taskListItems)
service.use(tables)

Object.keys(rules).forEach(rule => service.addRule(rule, rules[rule]))

module.exports = (html) => {
  return {
    text: service.turndown(html),
    image: firstImage(html)
  }
}
