App.Views.MainContentListing = Backbone.View.extend({
	initialize: function() {
		_.bindAll(this, "render");
	},
	render: function() {
		var $container = this.$(".main-content-container").empty();
		App.MainContents.each(function(MainContent) {
			new App.Views.MainContent({
				model: MainContent,
				$container: $container
			}).render();
		});
	  return this;
	}
});

App.Views.BlogContentListing = Backbone.View.extend({
	initialize: function() {
		_.bindAll(this, "render");
	},
	render: function() {
		var $container = this.$(".main-content-container").empty();
		App.BlogContents.each(function(BlogContent) {
			new App.Views.BlogContent({
				model: BlogContent,
				$container: $container
			}).render();
		});
	  return this;
	}
});