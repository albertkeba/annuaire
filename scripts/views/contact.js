app.views.contact = Backbone.View.extend({
	tagName: 'div',
	className: 'contact col-4 col-sm-4 col-lg-4',
	events: {
		'click .edit'	: 'edit',
		'click .remove'	: 'remove'
	},
	initialize: function(){
		//app.utils.showDebug('initialize app.views.contact');
		this.template = app.utils.templateLoader.get('contact');
		//app._event.on('addOne', this.addOne, this);
	},
	render: function(){
		this.$el.html( Mustache.render( this.template, this.model ) );
		return this;
	},
	edit: function( e ){
		e.preventDefault();

		var $form = $('#contactForm');
			$form.find('#lastname').val( this.model.lastname );
			$form.find('#firstname').val( this.model.firstname );
			$form.find('#department').val( this.model.department );
			$form.find('#title').val( this.model.title );
			$form.find('#officePhone').val( this.model.officePhone );
			$form.find('#email').val( this.model.email );
			$form.find('#contactid').val( this.model.id );

			this.render();
	},
	remove: function( e ){
		e.preventDefault();
		var self = this
			id	 = this.model.id;

		$.ajax({
			url		: app.utils.serviceUrl + 'deleteContact/' + id,
			type	: 'DELETE',
			dataType: 'json',
			success	: function( result ){;
				if ( result.success == 1 )
				{
					app.directory.remove( id );
					self.$el.remove();
				}
			}
		});
	}
});