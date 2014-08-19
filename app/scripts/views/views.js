console.log('views connected');

var MyView = Backbone.View.extend({

	className: '.hero-unit',

	events: {
		'click h1' : 'sayYay'
	},

	initialize: function () {
		this.render();
	},

	render: function () {
		var elem = "<h1>Hi!</h1>";
		this.$el.html(elem);
	},

	sayYay: function(){
		alert('yay!');
	}

});

var PostView = Backbone.View.extend({

	className: '.hero-unit',

	events: {
		'click h1' : 'sayHey'
	},

	sayHey: function(){
		alert('hey!');
	}

});

// var ItemView = Backbone.View.extend({
//   tagName: 'li'
// });

// var BodyView = Backbone.View.extend({
//   el: 'body'
// });

// var item = new ItemView();
// var body = new BodyView();

// alert(item.el + ' ' + body.el);