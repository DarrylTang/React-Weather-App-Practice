var names = ['John', 'Harry', 'Dick'];

//classic foreach statement
names.forEach(function(name){
    console.log('forEach', name);
});

// Arrow function shortens anoynomous functions,
// This one allows for multiple statements to run
names.forEach((name) => {
    console.log('arrowFunction', name);
    console.log('arrowFunction2', name);
});

// This one allows for really shortened single statements
names.forEach((name)=> console.log('simpleArrow', name));

// any statement declared after an arrow function gets automatically returned
var returnMe = (name) => name + '!';
console.log(returnMe('Darryl'));

// It also does not get the 'this' keyword to become updated
var person = {
    name: 'Darryl',
    greet: function(){
        names.forEach((name)=> {
            console.log(this.name + ' says hi to '+ name)
        });
    },
    //compared to this where an anoynomous function will
    greet2: function(){
        names.forEach(function(name) {
            console.log(this.name + ' says hi to '+ name)
        });
    }
}

person.greet();
person.greet2();

//challenge AREA--
// function add (a, b) {
//     return a + b;
// }

// console.log(add(1,6));

// //function statement
// var addStatement = (a,b) => {
//     return a+b;
// }

// console.log(addStatement(3,2));

// //function expression
// var addExpression = (a,b) => a+b;

// console.log(addExpression(9,2));
