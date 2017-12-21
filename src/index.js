/*
 * Ditto JSON Middleware
 */
module.exports = DittoJson;

function DittoJson() {};

DittoJson.prototype.run = function(files, Ditto, done) {
  console.info("> JSON Parsed");

  setImmediate(done);

  Object.keys(files).forEach(function(filepath) {
    var file = files[filepath],
      json = JSON.parse(file.content);

    if (json) {
      //elevate the "template" and "title" properties
      if (json.template) file.template = json.template;
      if (json.title) file.title = json.title;

      file.content = json;
    }
  });
};
