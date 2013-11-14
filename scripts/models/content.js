App.Models.MainContent = Backbone.Model.extend({
	defaults: {
		title: "A rendering error in 'MainContent' has occured. Please, refresh this web application.",
		link: "#"
	}
});

App.Models.BlogContent = Backbone.Model.extend({
	defualts: {
		title: "A rendering error in 'BlogContent' has occured. Please, refresh this web application.",
		content: "Please, add some content to this blog post."
	}
});