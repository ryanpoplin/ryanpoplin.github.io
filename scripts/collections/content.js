App.Collections.MainContent = Backbone.Collection.extend({
	model: App.Models.MainContent
});

var mainContentData = [{
	
}, {
	title: "The Iron Yard",
	link: "http://m.peacemedicalcenter.com"
}, {

}];

App.Collections.BlogContent = Backbone.Collection.extend({
	model: App.Models.BlogContent
});

var blogContentData = [{
	title: "My time at The Iron Yard Academy",
	content: "The Iron Yard Academy is everything you would have dreamt for and much more. Eric Dodds, Mason Stewart, Peter Barth, and the rest of The Iron Yard Team have layed the foundations for amazing things to happen. Be sure to check their stuff out! Now, back to coding..."
}];