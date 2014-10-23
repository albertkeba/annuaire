app.router = Backbone.Router.extend({
	routes: {
		'': 'index'
	},
	initialize: function(){
		app.utils.showDebug('initialize app.router');
	},
	index: function(){
		app.directory = new app.collections.contacts();
		
		app.directory.off('add');
		app.directory.fetch({
			success: function( collection ){
				new app.views.contactsList({collection: collection}).render();
			}
		},{parse: true});
		new app.views.form();
	},

});