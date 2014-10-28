app.views.contactsList = Backbone.View.extend({
	el: $('#contacts'),
	initialize: function( options ){
		app.utils.showDebug('initialize app.views.contacts');

		options || (options={})

		this._itemViews = {};
		app._event.on('addOne', this.addOne, this);
		app._event.on('refreshOne', this.refreshOne, this);
	},
	render: function(){
		var self = this;

		_.each(this.collection.toJSON(), function( model ){
			self._itemViews[ model.id ] = new app.views.contact({model: model});
		
			this.$el.append( self._itemViews[ model.id ].render().el  );
		}, this);

		return this;
	},
	addOne: function( model ){
		this.$el.append( new app.views.contact({model: model.toJSON()}).render().el );
	},
	refreshOne: function( model ){
		this._itemViews[ model.id ].model = model.attributes;
		this._itemViews[ model.id ].render().el;
	}
});