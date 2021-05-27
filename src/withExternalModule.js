const fetch = require('node-fetch');

module.exports = {
	run: function () {
		return fetch('https://github.com/')
			.then(res => res.text())
			.then(body => console.log(body));
	},
};
