App.Routers.MainRoutes = Backbone.Router.extend({
	routes: {
		"": "renderHome",
		"blog": "renderBlog"
	},
	renderHome: function() {
		$(function() {
			$(".main-content-container").html("");
			App.MainContentListing = new App.Views.MainContentListing({
				el: $("#primary-section")
			});
			App.MainContentListing.render();
		});
	},
	renderBlog: function() {
		$(function() {
			$(".main-content-container").html("");
			App.BlogContentListing = new App.Views.BlogContentListing({
				el: $("#primary-section")
			});
			App.BlogContentListing.render();
		});
	}
});	

$(function() {
	App.Browser = new App.Routers.MainRoutes;
	Backbone.history.start();
});
