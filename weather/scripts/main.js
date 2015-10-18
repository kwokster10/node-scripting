var $ = require("jquery"),
	_ = require("underscore");

var RedditAPI = require('./RedditAPI');

var compiled = _.template($('#js-search'))

$(".js-search").on("keypress", function(e){
	if (e.which !== 13) {
		return;
	}

	RedditAPI.search($(e.target).val()).then(function(data) {
		var children = data.data.children;
		console.log(children);

		var titles = children.map(function(child) {
			return {
				title: child.data.title,
				url: RedditAPI.basePublicURL + child.data.permalink
			}
		});

		console.log(titles);
		$("js-results").empty().html( titles.join('\n'));
	});
	$(e.target).val('');
});