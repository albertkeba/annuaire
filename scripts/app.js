'use strict';

var app = {
	models		: {},
	collections	: {},
	views		: {},
	utils		: {},
	_event		: _.extend({}, Backbone.Events),
	config		: {
		debug: false
	}
};