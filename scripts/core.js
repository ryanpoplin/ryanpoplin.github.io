var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Browser: null,
	SecondaryHeaderContentsHome: null,
	SecondaryHeaderListingHome: null,
	SecondaryHeaderContentsBlog: null,
	SecondaryHeaderListingBlog: null,
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
	App.SecondaryHeaderContentsHome = new App.Collections.SecondaryHeaderContentHome();
	App.SecondaryHeaderContentsHome.add(secondaryHeaderContentHomeData);
	App.SecondaryHeaderContentsBlog = new App.Collections.SecondaryHeaderContentBlog();
	App.SecondaryHeaderContentsBlog.add(secondaryHeaderContentBlogData);
});