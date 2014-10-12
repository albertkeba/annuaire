app.views.contact = Backbone.View.extend({
	tagName: 'div',
	className: 'contact col-4 col-sm-4 col-lg-4',
	events: {
		'click h3':'test'
	},
	initialize: function(){
		//app.utils.showDebug('initialize app.views.contact');
		this.template = app.utils.templateLoader.get('contact');
	},
	render: function(){
		this.$el.html( Mustache.render( this.template, this.model ) );
		return this;
	},
	test: function(){
		console.log( this.model );
	}
});