const localRoute = 'https://api.imavi.org'

module.exports = {
  wrapUrl (path) {
    let requestUrl = localRoute + '/cim/' + path
    if (process.env.USE_LOCAL === 'false') {
      requestUrl = 'https://api.imavi.org/cim/' + path
    }
    return requestUrl
  },
  imaviUrl (path) {
    let requestUrl = localRoute + '/imavi/' + path
    if (process.env.USE_LOCAL === 'false') {
      requestUrl = 'https://api.imavi.org/imavi/' + path
    }
    return requestUrl
  }
}
