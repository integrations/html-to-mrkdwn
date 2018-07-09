# html-to-mrkdwn

Convert HTML to Slack's [mrkdwn](https://api.slack.com/docs/message-formatting) format.

```js
const mrkdwn = require('html-to-mrkdwn')

const html = `
<p><strong>Hello</strong> <a href="https://example.com">cruel</a> <em>world</em>!</p>

<p><img src="https://media.giphy.com/media/5xtDarEbygs3Pu7p3jO/giphy.gif"></p>
`

mrkdwn(html)
// {
//   text: "*Hello* <https://example.com|cruel> _world_!\n\n<https://media.giphy.com/media/5xtDarEbygs3Pu7p3jO/giphy.gif>",
//   image: "https://media.giphy.com/media/5xtDarEbygs3Pu7p3jO/giphy.gif",
// }
```

You can customize the conversion with some options:

```js
const mrkdwn = require('html-to-mrkdwn')

const html = `
<p>Hello</p>
<hr>
<p>Goodbye</p>
`

mrkdwn(html, {trimAt: 'hr'})
// {
//   text: "Hello",
// }

```

[![Greenkeeper badge](https://badges.greenkeeper.io/github-slack/html-to-mrkdwn.svg)](https://greenkeeper.io/)
