app.collections.contacts = Backbone.Collection.extend({
	url: app.utils.serviceUrl + 'contacts',
	model: app.models.contact,
	initialize: function(){
		app.utils.showDebug('initialize app.collections.contacts');

		this.on('add', this.add, this);
	},
	add: function( model ){
		this.trigger('contactAdded');//this.model );
	}
});