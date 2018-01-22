/*
 * Ditto JSON Middleware
 */
module.exports = DittoJson;

function DittoJson() {};

DittoJson.prototype.run = function(files, Ditto, done) {
  setImmediate(done);

  Object.keys(files).forEach(function(filepath) {
    let
      file = files[filepath],
      json = JSON.parse(file.content);

    if (typeof json !== 'undefined' && json !== null) {
      file.content = json;
    }
  });
};