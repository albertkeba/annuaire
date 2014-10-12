app.router = Backbone.Router.extend({
	routes: {
		'': 'index'
	},
	initialize: function(){
		app.utils.showDebug('initialize app.router');
	},
	index: function(){
		new app.views.viewport();
	}
});