var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Browser: null,
	MainContents: null,
	MainContentListing: null,
	BlogContents: null,
	BlogContentListing: null
};

$(function() {
	App.MainContents = new App.Collections.MainContent();
	App.MainContents.add(mainContentData);
	/*App.MainContents.on("add remove", function() {
		App.MainContentListing.render();
	});*/
	App.BlogContents = new App.Collections.BlogContent();
	App.BlogContents.add(blogContentData);
});