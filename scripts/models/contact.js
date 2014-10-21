app.models.contact = Backbone.Model.extend({
	defaults: {
		firstname	: '',
		lastname	: '',
		managerid	: '',
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
		data.managerid	= response.managerid;
		data.department	= response.department;
		data.officePhone= response.officePhone;
		data.email		= response.email;
		data.city		= response.city;
		data.picture	= response.picture;
		
		return data;
	}
});