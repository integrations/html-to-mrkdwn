const fs = require('fs')
const mrkdwn = require('..')

fs.readdirSync('test/fixtures').forEach(file => {
  if (!file.endsWith('.mrkdwn')) return

  test(file.replace('.mrkdwn', ''), () => {
    const content = fs.readFileSync(`test/fixtures/${file}`).toString()
    const [input, options, output] = content.split(/^====(.*)$/m)
    const optionsObject = options ? JSON.parse(options) : undefined
    expect(mrkdwn(input, optionsObject).text.trim()).toEqual(output.trim())
  })
})

test('returns images', () => {
  const html = `
    <p><strong>Hello</strong> <a href="https://example.com">cruel</a> <em>world</em>!</p>
    <p><img src="https:/example.com/first.gif"></p>
    <p><img src="https:/example.com/secon.gif"></p>
  `

  const { image } = mrkdwn(html)
  expect(image).toEqual('https://example.com/first.gif')
})
