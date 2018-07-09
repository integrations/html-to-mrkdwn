const TurnDown = require('turndown')
const { strikethrough, taskListItems } = require('turndown-plugin-gfm')

const parseHtml = require('./parse-html')
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

Object.keys(rules).forEach(rule => service.addRule(rule, rules[rule]))

module.exports = (html, options) => {
  options = options || {}
  const frag = parseHtml(html, {trimAt: options.trimAt})
  return {
    text: service.turndown(frag),
    image: firstImage(frag)
  }
}
