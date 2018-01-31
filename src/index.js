/*
 * Ditto JSON Middleware
 */
module.exports = DittoJson;

function DittoJson() {};

/**
 * Ditto JSON parsing middleware
 * @param {Array.<Object.<DittoFile>>} files 
 * @param {Object.<Ditto>} Ditto 
 * @param {Function} done 
 */
DittoJson.prototype.run = function(files, Ditto, done) {
  let self = this;

  setImmediate(done);

  files.forEach(function(file){
    if(file.content != 'undefined' && file.content != null)
    {
      let parsed = self.parseJson(file.content);

      if(parsed != 'undefined' && parsed != null)
      {
        file.content = parsed;
      }
    }		
  });
};

/**
 * Safely parse node file buffer into JSON
 * @param {Array} fileBuffer 
 * @returns {Object} parsed json
 */
DittoJson.prototype.parseJson = function(fileBuffer){
  let parsed;

  try {
    parsed = JSON.parse(fileBuffer);
  } catch (e) {
    parsed = null;
  }
  
  return parsed;
};
