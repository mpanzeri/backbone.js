var Person = Backbone.Model.extend({
    defaults: {
        nome: 'Luca',
        eta: 23,
        occupazione: 'Developer'
    },
	//Aggiungiamo la validazione
	validate: function(data){
        if (data.eta <  0){
            return 'L\'eta\' deve avere valori positivi';
        }

        if (!data.nome){
            return 'Devi definire un nome';
        }
    },
	work: function(){
        return this.get('nome') + ' sta lavorando';
    }

});

//Creiamo un oggetto persona	
var persona = new Person({nome: "Mattia", eta: 2, occupazione: "Software Developer"})

//Bindiamo un event listen alla persona per visualizzare i messaggi di errore
persona.on('error', function(model,error){
	console.log(error);
});