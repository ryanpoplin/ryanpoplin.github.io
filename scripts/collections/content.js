App.Collections.MainContent = Backbone.Collection.extend({
	model: App.Models.MainContent
});

var mainContentData = [{
	title: "LocaleCountdown: My final project for The Iron Yard Academy",
	link: "https://github.com/ryanpoplin/appy"
}, {
	title: "A jQuery Mobile App for Peace Medical Center",
	link: "http://m.peacemedicalcenter.com"
}, {

}];

App.Collections.BlogContent = Backbone.Collection.extend({
	model: App.Models.BlogContent
});

var blogContentData = [{
	title: "It's prime time to become an awesome JavaScript Developer",
	content: "JavaScript has come a long way. I'm not going to go over any history here, but there's a lot to be exited about. Animated games and movies with the HTML5 canvas element, high performance network applications with a development stack such as M.E.B.N. (see my footer), and just about anything else you can imagine! Now, get to it!"
}, {
	title: "My time at The Iron Yard Academy",
	content: "The Iron Yard Academy is everything you would have dreamt for and much more. Eric Dodds, Mason Stewart, Peter Barth, and the rest of The Iron Yard Team have layed the foundations for <a href='http://theironyard.com/portfolio/' target='_blank' class='link-decoration'>amazing things to happen</a>. Be sure to check their stuff out @ <a href='http://www.theironyard.com' target='_blank' class='link-decoration'>theironyard.com</a>. Now, back to coding..."
}];

App.Collections.SecondaryHeaderContentHome = Backbone.Collection.extend({
	model: App.Models.SecondaryHeaderContentHome
});

var secondaryHeaderContentHomeData = [{
	heading: "Hi. My name's Ryan Poplin. I enjoy coding, writing music, and having ardent conversations.",
	paragraph: "Check out some of the work I've done below..."
}];

App.Collections.SecondaryHeaderContentBlog = Backbone.Collection.extend({
	model: App.Models.SecondaryHeaderContentBlog
});

var secondaryHeaderContentBlogData = [{
	heading: "Everyone has a blog, right? Well, here are some of my thoughts.",
	paragraph: "Hope you'll like them..."
}];