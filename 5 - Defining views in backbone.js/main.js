var Person = Backbone.Model.extend({
    defaults: {
        nome: 'Luca',
        eta: 23,
        occupazione: 'Developer'
    },
});
	
//var PersonView = Backbone.View.extend({
//    tagName: 'li'
//});

var PersonView = Backbone.View.extend({
    tagName: 'div',
    className: 'developer',
    id: 'personaMattia',

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.model.get('nome') + "-" + this.model.get('eta') + "-" + this.model.get('occupazione'));
	}
});




