console.log("Hello World");

//Variables and types of variables

var string = "Hello World";
var number = 10;
var boolean = true;
var noValueYet;

console.log(string);
console.log(number);
console.log(boolean);
console.log(noValueYet);


// Arrays
var array = [];

console.log("Now is empty ", array);
array = ["Pol", "Tatiana", "Marta", "Lluís", "Andy"];
console.log("Now is full ", array);
console.log("Length ", array.length);

// Objects

var object = {};

object = {
    name: "Pol",
    age: 22,
    student: false,
}

console.log(object);

var arrayOfObject = [{
    name: "Pol",
    age: 22,
    student: false,
}, {
    name: "Tatiana",
    age: 25,
    student: true,
}, {
    name: "Marta",
    age: 27,
    student: true,
}];

console.log(arrayOfObject);
//Conditionals
var randomNumber = 5;
if (randomNumber > 5) {
    console.log("It's higer");
} else if (randomNumber == 5) {
    console.log("It's equal");
} else {
    console.log("It's lower");
}

// Diference between = , == , ===

if (null == undefined) {
    console.log("are de same");
} else {
    console.log("aren't the same");
}


//Loops | Iteration 

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Functions, Parameters and Aguments 

//myFirstFunction();
myFirstFunction(array);
function myFirstFunction(field) {

    for (var i = 0; i < field.length; i++) {
        var everyElement = field[i];
        console.log(everyElement);
    }
//    console.log(everyElement);
}

//DOM
mySecondFunction();
function mySecondFunction () {
    var test = document.getElementById("test");
    test.innerHTML = "Hellow World";
    var div = document.createElement("div");
    div.innerHTML = "This is my first div nested from javascript"
    test.appendChild(div);
    
}
