app.collections.contacts = Backbone.Collection.extend({
	url: app.utils.serviceUrl + 'contacts',
	model: app.models.contact,
	initialize: function(){
		if ( app.utils.debug )
			console.log('initialize app.collections.contacts');

	}
});