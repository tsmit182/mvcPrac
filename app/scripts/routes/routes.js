console.log('routes connected');

var MyRouter = Backbone.Router.extend({

	routes: {
		'': 'home',
		'post' : 'single'
	},

	home: function() {
		var myview = new MyView();
	},

	single: function() {
		var postview = new PostView();
	}

})