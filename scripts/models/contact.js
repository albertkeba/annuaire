app.models.contact = Backbone.Model.extend({
	defaults: {
		firstname	: '',
		lastname	: '',
		managerId	: 0,
		title		: '',
		department	: '',
		officePhone	: '',
		email		: '',
		city		: '',
		picture		: ''
	},
	parse: function( response ){
		var data = {};
		data.id			= response.id;
		data.firstname	= response.firstName;
		data.lastname	= response.lastName;
		data.managerId	= parseInt( response.managerId );
		data.department	= response.department;
		data.title		= response.title;
		data.officePhone= response.officePhone;
		data.email		= response.email;
		data.city		= response.city;
		data.picture	= response.picture;
		
		return data;
	},
	initialize: function(){
		this.on('change', this.change, this);
	},
	change: function( model ){
		app._event.trigger('refreshOne', model);
	}
});