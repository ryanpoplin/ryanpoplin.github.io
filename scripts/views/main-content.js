App.Views.MainContent = Backbone.View.extend({
	template: _.template($("#main-content-template").html()),
	$container: null,
	initialize: function(options) {
		_.bindAll(this, "render", "insert");
		this.$container = options.$container;
		this.listenTo(this.model, "change", this.render());
		this.insert();
	},
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}, 
	insert: function() {
		this.$container.append(this.$el);
	}
});

App.Views.BlogContent = Backbone.View.extend({
	template: _.template($("#blog-content-template").html()),
	$container: null,
	initialize: function(options) {
		_.bindAll(this, "render", "insert");
		this.$container = options.$container;
		this.listenTo(this.model, "change", this.render());
		this.insert();
	},
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}, 
	insert: function() {
		this.$container.append(this.$el);
	}
});

App.Views.SecondaryHeaderContentHome = Backbone.View.extend({
	template: _.template($("#secondary-header-template").html()),
	$container: null,
	initialize: function(options) {
		_.bindAll(this, "render", "insert");
		this.$container = options.$container;
		this.listenTo(this.model, "change", this.render());
		this.insert();
	},
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}, 
	insert: function() {
		this.$container.append(this.$el);
	}
});

App.Views.SecondaryHeaderContentBlog = Backbone.View.extend({
	template: _.template($("#secondary-header-template").html()),
	$container: null,
	initialize: function(options) {
		_.bindAll(this, "render", "insert");
		this.$container = options.$container;
		this.listenTo(this.model, "change", this.render());
		this.insert();
	},
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}, 
	insert: function() {
		this.$container.append(this.$el);
	}
});