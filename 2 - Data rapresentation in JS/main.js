//Codice Senza backbone
var Persona = function(data){
    this.nome = data.nome;
    this.eta = data.eta;
    this.occupazione = data.occupazione;
};

Persona.prototype.lavoro = function(){
    return this.nome + ' sta lavorando, la sua occupazione: ' + this.occupazione;
};

var persona = new Persona({nome: "Mattia", eta: 26, occupazione: "Software Developer"})
