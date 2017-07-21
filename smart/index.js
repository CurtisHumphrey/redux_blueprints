const path = require('path')

var has_topic = false

module.exports = {
  description () {
    return 'generates a smart (redux connect) component, --topic=`subfolder`'
  },

  beforeInstall: function (options) {
    has_topic = options.entity.options.topic != null
  },

  fileMapTokens: function () {
    // Return custom tokens to be replaced in your files
    return {
      __topic__: function (options) {
        // logic to determine value goes here
        return options.entity.options.topic || 'unknown'
      },
    }
  },

  filesPath: function () {
    if (has_topic) {
      return path.join(this.path, 'files_sub')
    }
    return path.join(this.path, 'files')
  },
}
