# ditto-json
Ditto JSON - JSON Middleware Parser for [Ditto](https://github.com/pimbrouwers/ditto)

## Getting Started

`npm install ditt0` and `npm install ditt0-json` and created `index.js` with following content:

```javascript
const
  Ditto = require('ditt0'),
  DittoJson = require('ditt0-json');

Ditto()
  .source('./src') //default
  .destination('./public') //default
  .use(new DittoJson())
  .build(function(err){
    if(err) console.error(err);
  });
```
