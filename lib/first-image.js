module.exports = frag => {
  const img = frag.querySelector('img')

  if (img) {
    return img.src
  }
}
