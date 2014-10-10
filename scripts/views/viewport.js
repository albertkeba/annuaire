app.views.viewport = Backbone.View.extend({
	el: $('#viewport'),
	events: {},
	initialize: function(){
		if ( app.utils.debug )
			console.log('initialize app.views.viewport');

		this.on('ready', this.show, this);

		var self = this;
		new app.collections.contacts().fetch({
			success: function( models ){
				app.directory = models;
				self.trigger('ready');
			}
		});
	},
	show: function(){
		var template = app.utils.templateLoader.get('contacts');
		Mustache.parse( template );
		this.$el.html( Mustache.render(template, {contacts: app.directory.toJSON()}) );
	},
});