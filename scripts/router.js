App.Routers.MainRoutes = Backbone.Router.extend({
	routes: {
		"": "renderHome",
		"blog": "renderBlog"
	},
	renderHome: function() {
		$(function() {
			App.SecondaryHeaderListingHome = new App.Views.SecondaryHeaderListingHome({
				el: $("#secondary-header")
			});
			App.SecondaryHeaderListingHome.render();
			App.MainContentListing = new App.Views.MainContentListing({
				el: $("#primary-section")
			});
			App.MainContentListing.render();
		});
	},
	renderBlog: function() {
		$(function() {
			App.SecondaryHeaderListingBlog = new App.Views.SecondaryHeaderListingBlog({
				el: $("#secondary-header")
			});
			App.SecondaryHeaderListingBlog.render();
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