app.views.form = Backbone.View.extend({
	events:{
		'click button#btn-add-contact':'addContact'
	},
	el: $('#form'),
	initialize: function(){
		app.utils.showDebug('initialize app.views.form');

		this.template = app.utils.templateLoader.get('form');

		this.render();
	},
	render: function(){
		this.$el.html( this.template );
	},
	addContact: function( e ){
		e.preventDefault();
		var data 	= {}
			url 	= app.utils.serviceUrl + 'addContact';
			type 	= 'POST';
			
		this.$el.find('form').serializeArray().map(function( input ){
			data[input.name] = input.value;
		});

		if ( data.contactid != '' )
		{
			url = app.utils.serviceUrl + 'updateContact/' + data.contactid;
			type= 'PUT'; 
		}

		$.ajax({
			url		: url,
			type	: type,
			data	: JSON.stringify( data ),
			dataType: 'json',
			success	: function( rs ) {
				if ( rs.success === 1 && data.contactid === '' )
				{
					//-- ajout nouveau contact
					data.id = rs.id;
					app.directory.add( new app.models.contact(data) );
				}
				else
				{
					//-- mise à jour contact
					app.directory.get( data.contactid ).set( data );
				}
			},
			error	: function( error ){
				console.log( error );
			}
		});
	}
});