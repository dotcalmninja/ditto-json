const
	DittoJson = require('../src'),
	fs = require('fs');

describe('ditto json', function(){
	let file = {};

	beforeAll(function(){
		//mock DittoFile
		var stats = fs.statSync('./spec/support/files/index.json');
		var buffer = fs.readFileSync('./spec/support/files/index.json');

		file = {
			content: buffer,
			path: 'files/index.json',
			stats: stats
		};
	});

	it('should be contents of files/index.json', function(){
		let 
			dittoJson = new DittoJson(),
			parsed = dittoJson.parseJson(file.content),
			shouldEqual = { test: 'test' };

		expect(parsed).toEqual(shouldEqual);
	});
});