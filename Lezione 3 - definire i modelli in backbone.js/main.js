var Person = Backbone.Model.extend({
    defaults: {
        nome: 'Luca',
        eta: 23,
        occupazione: 'Developer'
    },
	work: function(){
        return this.get('nome') + ' sta lavorando';
    }

});
	
var persona = new Person({nome: "Mattia", eta: 26, occupazione: "Software Developer"})