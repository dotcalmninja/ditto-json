# ditto-json
Ditto JSON - Ditto JSON Middleware Parser

## Getting Started

`npm install ditt0` and `npm install ditt0-json` and created `index.js` with following content:

```javascript
const
  Ditto = require('ditt0'),
  DittoJson = require('ditt0-json')l

Ditto()
  .source('./src') //default
  .destination('./public') //default
  .use(new DittoJson())
  .build(function(err){
    if(err) console.error(err);
  });
```