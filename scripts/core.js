var object = {};
_.extend(object, Backbone.Events);
object.on("doIt", function(message) {
	console.log(message);
});
object.trigger("doIt", "It's a Backbone application...");

var App = {
	Models: {},
	Collections: {},
	CoreContents: null
};

$(function() {
	window.articleOne = new App.Models.CoreContent({
		title: "A jQuery Mobile Application for Peace Medical Center",
		slug: "Peace Medical Center",
	});
	App.CoreContents = new App.Collections.CoreContent();
	App.CoreContents.add(window.articleOne);
	App.CoreContents.add({});
	var coreContents = "";
	App.CoreContents.each(function(CoreContent) {
		coreContents += "<div>" + 
		CoreContent.get('title');
		if(CoreContent.isValid()) {
			coreContents += "(valid)";
		} else {
			coreContents += "(invalid)";
		}
		coreContents += "</div>";
	});
	$("#primary-section").html(coreContents);
});