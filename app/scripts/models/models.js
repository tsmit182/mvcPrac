console.log('models connected');

var PostModel = Backbone.Model.extend({

	idAttribute: '_id',

	defaults: {
		title: 'A Title!',
		date: new Date(),
		text: ''
	}

});



var TestCollection = Backbone.Collection.extend({

	model: PostModel,
	url: "http://tiy-atl-fe-server.herokuapp.com/collections/taylor-mvc-test"

});