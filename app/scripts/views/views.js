console.log('views connected');

var MyView = Backbone.View.extend({

	el: '.hero-unit',

	events: {
		'click h1' : 'sayYay'
	},

	sayYay: function(){
		alert('yay!');
	}

});

var myview = new MyView

// var ItemView = Backbone.View.extend({
//   tagName: 'li'
// });

// var BodyView = Backbone.View.extend({
//   el: 'body'
// });

// var item = new ItemView();
// var body = new BodyView();

// alert(item.el + ' ' + body.el);