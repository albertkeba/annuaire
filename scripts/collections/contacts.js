app.collections.contacts = Backbone.Collection.extend({
	url: app.utils.serviceUrl + 'contacts',
	model: app.models.contact,
	initialize: function(){
		app.utils.showDebug('initialize app.collections.contacts');

		this.on('add', this.add, this);
		this.on('remove', this.remove, this);
	},
	getByMangerId: function( managerId ){
		return this.where({managerId: managerId});
	},
	add: function( model ){
		app._event.trigger('addOne', model);
	},
	remove: function( model ){
		app._event.trigger('removeOne', model);
	}
});