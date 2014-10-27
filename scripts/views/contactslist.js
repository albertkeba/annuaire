app.views.contactsList = Backbone.View.extend({
	el: $('#contacts'),
	initialize: function( options ){
		app.utils.showDebug('initialize app.views.contacts');

		options || (options={})

		app._event.on('addOne', this.addOne, this);
		app._event.on('refreshOne', this.refreshOne, this);
	},
	render: function(){
		var temp = '';

		_.each(this.collection.toJSON(), function( model ){
			var t = new app.views.contact({model: model});
			//temp += $(new app.views.contact({model: model}).render().el).html();
			this.$el.append( new app.views.contact({model: model}).render().el  );
		}, this);

		//this.$el.append(temp);

		return this;
	},
	addOne: function( model ){
		this.$el.append( new app.views.contact({model: model.toJSON()}).render().el );
	},
	refreshOne: function( model ){
		console.log('refreshOne', model);
	}
});