/*
 * Ditto JSON Middleware
 */

const fs = require('fs');

module.exports = DittoJSON;

function DittoJSON() {
  return function(files, Ditto, done) {
    var toProcess = Object.keys(files).length;

    for (i in files) {
      var
        file = files[i],
        json = JSON.parse(files[i]._contents);

      file = Object.assign(file, json);
    }

    done(files);
  };
};
