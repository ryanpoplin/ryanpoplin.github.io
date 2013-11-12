var App = {
	Models: {},
	Collections: {},
	MainContents: null
};

$(function() {
	window.articleOne = new App.Models.MainContent({
		title: "A jQuery Mobile application for Peace Medical Center"
	});
	window.articleTwo = new App.Models.MainContent();
	window.articleThree = new App.Models.MainContent();
	App.MainContents = new App.Collections.MainContent();
	App.MainContents.add(window.articleOne);
	App.MainContents.add(window.articleTwo);
	App.MainContents.add(window.articleThree);
	var mainContents = "";
	App.MainContents.each(function(MainContent) {
		mainContents += "<div class='main-content'>" + 
		MainContent.get('title');
		mainContents += "</div>";
	});
	$("#primary-section").html(mainContents);
});