var App = {
	Models: {},
	Collections: {},
	Views: {},
	MainContents: null,
	MainContentListing: null
};

$(function() {
	App.MainContents = new App.Collections.MainContent();
	App.MainContents.add(mainContentData);
	App.MainContentListing = new App.Views.MainContentListing({
		el: $("#primary-section")
	});
	App.MainContentListing.render();
	App.MainContents.on("add remove", function() {
		App.MainContentListing.render();
	});
});