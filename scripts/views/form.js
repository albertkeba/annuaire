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
	addContact: function(e){
		e.preventDefault();
		var data = [];
		this.$el.find('form').serializeArray().map(function( input ){
			data[input.name] = input.value;
		});

		//app.directory.add( new app.models.contact(data) );
	}
});