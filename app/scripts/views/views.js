var DatView = Backbone.Model.extend({

	className: 'container',

	events: {
		'click div' : 'sayhi'
	},

	initialize: function () {
		console.log('DatView is active');
		this.render;
	},

		render: function () {
			var elements = "<ul><li>Bob</li><li>Sam</li></ul>";
			this.$el.html(elements);
	},

	sayhi: function () {
		alert('hi');
	}

});
