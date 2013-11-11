App.Models.CoreContent = Backbone.Model.extend({
	defaults: {
		title: "CoreContent Title...",
	},
	validate: function(attrs, options) {
		if(!attrs.title) {
			return "CoreContent must have a title...";
		}
	},
	initialize: function(attributes) {
		var coreContentSlug = attributes.slug || "No Title...";
		console.log("CoreContent model " + coreContentSlug + " was initialized...");
	}
});