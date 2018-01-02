# html-to-mrkdwn

[![Greenkeeper badge](https://badges.greenkeeper.io/github-slack/html-to-mrkdwn.svg)](https://greenkeeper.io/)

Convert HTML to Slack's [mrkdwn](https://api.slack.com/docs/message-formatting) format.

```js
const mrkdwn = require('html-to-mrkdwn')

const html = '<strong>Hello</strong> <a href="https://example.com">cruel</a> <em>world</em>!'

mrkdwn(html)
// *Hello* <https://example.com|cruel> _world_!
```
