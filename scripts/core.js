var App = {
	Models: {},
	Collections: {},
	MainContents: null
};

$(function() {
	window.articleOne = new App.Models.MainContent();
	App.MainContents = new App.Collections.MainContent();
	App.MainContents.add(window.articleOne);
	var mainContents = "";
	App.MainContents.each(function(MainContent) {
		mainContents += "<div>" + 
		MainContent.get('title');
		mainContents += "</div>";
	});
	$("#primary-section").html(mainContents);
});