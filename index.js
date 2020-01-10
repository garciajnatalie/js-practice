var myNumber = 0; // any number without quotes
var myBoolean = true; //true or false
var myString = 'This is my string'; //piece of text

//you can do math
var add = 1 + 2; //3
var multiply = 8 * 8; //64
var sub = 10 - 5; //5
var div = 100 / 50; //2

var product = 1 + 2 / 3; //1.6666
var product2 = (1 + 2) / 3; // 1
//console.log(product);
//console.log(product2);
console.log(Math);

//random
var randomNumber = Math.random()*100;

if (randomNumber > 50) {
    console.log(randomNumber, 'I am above 50');
}

if (randomNumber < 50) {
    console.log(randomNumber, 'I am below 50');
}

// Booleans + true and false values
var trueBoolean = true;
var falseBoolean = false;

if (trueBoolean) {
  console.log ('I am inside the trueBoolean')
}

if (falseBoolean) {
  console.log ('I am inside the falseBoolean');
}


// Strings
var string = 'Hello,World!';
var capStrong = string.toUpperCase();
console.log(capStrong);

var y = 'Hello, World';
var includesHello = y.includes('Hello');
console.log (includesHello);

var helloWorld = 'Hello World'
var replaceHelloWorld = helloWorld.replace('Hello', 'Goodbye');
console.log (replaceHelloWorld);

var test = 'The rain in SPAIN stays mainly in the plains';
var matchTest = test.match(/ain/g);
console.log (matchTest);
