app.views.contactsList = Backbone.View.extend({
	el: $('#contacts'),
	initialize: function( options ){
		app.utils.showDebug('initialize app.views.contacts');

		options || (options={})

		this.collection.on('add', this.addOne, this);
	},
	render: function(){
		var temp = '';

		_.each(app.directory.toJSON(), function( model ){
			var t = new app.views.contact({model: model});
			this.$el.append( new app.views.contact({model: model}).render().el  );
		}, this);

		return this;
	},
	addOne: function( model ){
		var contactView = new app.views.contact({model: model});
		contactView.render();
		this.$el.append( contactView.el );
	}
});