app.views.viewport = Backbone.View.extend({
	events: {},
	initialize: function(){
		if ( app.utils.debug )
			console.log('initialize app.views.viewport');

		var data = new app.collections.contacts();
		//app.directory = data.fetch();
	}
});