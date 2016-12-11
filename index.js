const Request = require('./lib/request')
const user = require('./lib/api/user')
const org = require('./lib/api/org')
const topic = require('./lib/api/topic')
const question = require('./lib/api/question')
const answer = require('./lib/api/answer')

module.exports = function() {
  var _request = new Request()

  var api = {
    cookie(val) {
      if (!arguments.length) {
        return _request.headers['Cookie']
      } else {
        _request.setCookie(val)
      }
    },

    proxy(val) {
      if (!arguments.length) {
        return _request.proxy
      } else {
        _request.setProxy(val)
      }
    },

    user: user(_request),
    org: org(_request),
    topic: topic(_request),
    question: question(_request),
    answer: answer(_request),

    version: require('./package').version
  }

  return api
}
