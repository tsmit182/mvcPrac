var DatRouter = Backbone.Router.extend ({

	initialize: function () {
		console.log('DatRouter is working');
	},

	routes:{
		'': 'home',
		'x' : 'other'
	},

	home: function() {
		var myview = new DatView();
		$('.hero-unit').html(myview.el);
	}

});	

// var MyRouter = Backbone.Router.extend({

// 	initialize:

// })