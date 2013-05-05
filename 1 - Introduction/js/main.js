/*Senza backbone
var Person = function(config){
    this.name = config.name;
    this.age = config.age;
    this.occupation = config.occupation;
};

Person.prototype.work = function(){
    return this.name + ' is working.';
};
*/

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest User',
        age: 23,
        occupation: 'Worker'
    },
	validate: function(attributes){
        if ( attributes.age <  0){
            return 'Age must be positive.';
        }

        if ( !attributes.name ){
            return 'Every person must have a name.';
        }
    },
	work: function(){
        return this.get('name') + ' is working.';
    }

});
	
var person = new Person({name: "Mohit Jain", age: 1, occupation: "Software Developer"})
person.on('error', function(model,error){
	console.log(error); // printing the error message on console.
});