app.views.viewport = Backbone.View.extend({
	el: $('#viewport'),
	events: {},
	initialize: function(){
		app.utils.showDebug('initialize app.views.viewport');

		this.on('ready', this.show, this);
		this.on('contactAdded', this.test, this);

		var self = this;
		app.directory = new app.collections.contacts();

		app.directory.off('add');
		app.directory.fetch({
			success: function( models ){
				self.trigger('ready');
			}
		});
	},
	show: function(){
		new app.views.contactsList().render();
	},
	test: function(){
		console.log('contact added');
	}
});