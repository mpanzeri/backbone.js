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

//Creiamo un oggetto persona	
var persona = new Person({nome: "Mattia", eta: 2, occupazione: "Software Developer"})
