const fs = require('fs')
const mrkdwn = require('..')

fs.readdirSync('test/fixtures').forEach(file => {
  if (!file.endsWith('.mrkdwn')) return

  test(file.replace('.mrkdwn', ''), () => {
    const content = fs.readFileSync(`test/fixtures/${file}`).toString()
    const [input, output] = content.split('====')
    expect(mrkdwn(input).trim()).toEqual(output.trim())
  })
})
