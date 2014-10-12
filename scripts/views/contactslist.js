app.views.contactsList = Backbone.View.extend({
	el: $('#contacts'),
	initialize: function(){
		app.utils.showDebug('initialize app.views.contacts');
	},
	render: function(){
		var temp = '';

		_.each(app.directory.toJSON(), function(model){
			var t = new app.views.contact({model: model});
			this.$el.append( new app.views.contact({model: model}).render().el  );
		}, this);

		return this;
	}
});