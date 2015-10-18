var $ = require('jquery');

var baseURL = 'https://api.reddit.com';

var RedditAPI = {};

RedditAPI.basePublicURL = "https://reddit.com"

RedditAPI.search = function search( query ) {
	if (typeof query !== "string") {
		return;
	}

	// returning the ajax object will return the promise object 
	// then the logic can be done in main.js
	return $.ajax({
		url: baseURL + "search",
		data: {
			q: query
		}
	});
};

module.exports = RedditAPI;