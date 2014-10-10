app.router = Backbone.Router.extend({
	routes: {
		'': 'index'
	},
	initialize: function(){
		if ( app.utils.debug )
			console.log('initialize app.router');
	},
	index: function(){
		new app.views.viewport();
	}
});