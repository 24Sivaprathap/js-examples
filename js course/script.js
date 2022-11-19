// alert("hi im siva");
// console.log("hello how are you");


// var msg = "hello  my name is sivaprathap, I'm learning java script";

// //alerting
// alert(msg);

// //logging
// console.log(msg);



//concadination

// let name = "Siva";

// let msg = "hello  my name is sivaprathap " + name + "  I'm learning java script";

// //alerting
// alert(msg);

// //logging
// console.log(msg);


// let name = "siva";
// console.log(name);

// let number1 = 5;
// let number2 = 4;

// let result = number1 + number2;
// console.log(result);


/*

rules:
    1. No javascript keywords name;
    2. Should not start with number;
    3. No space and no -
    4. Its case-sensitive
    5. Use meaningful names.


*/


// const name = "Siva";
// const dob = "24-09-1994";

// let msg = "hello  my name is sivaprathap " + name + " & i born on  " + dob + " I'm learning java script";
// console.log(msg);



// //Data types


// let firstName = "Siva"; //string

// let age = 28; //integer

// let isYoung = true; //boolean

// let lastName = undefined; //undefined

// let trophy = null; //null



//objects

// let person = {
//     name: "Siva Prathap",
//     age: 28,
//     gender: "Male",
//     address: "coimbatore,tamilnadu,india",
//     sibling: {
//         brother: "abishek",
//         sister: "trisha"
//     }

// }
// // console.log(person);

// //Dot notation
// console.log(person.address);

//Bracket notation
// console.log(person["sibling"]);

// {} - Object



// [] - array

// //Array

// let favcolor = ["red", "white", "black"]

// favcolor[5] = 45
// favcolor[4] = "green"

// console.log(favcolor.length);



//Functions

// let name = "Siva";
// let msg = "Hello " + name + " I'm learning javascript";

// //logging
// console.log(msg);

// function greetUser() {
//     //set of statements
//     let name = "Siva";
//     let msg = "Hello " + name + " I'm learning java script";

//     console.log(msg)
// }

// greetUser();


//parameters
//single parameters
// function greetUser(name) {
//     //set of statements
//     let msg = "Hello " + name + " I'm learning java script";

//     console.log(msg)
// }

// greetUser("Siva")  //arguments
// greetUser("Prathap")


//double parameters
// function greetUser(firstName, lastName) {
//     //set of statements
//     let msg = "Hello " + firstName + " " + lastName + " I'm learning java script";

//     console.log(msg)
// }

// greetUser("Siva", "Prathap")  //arguments


// function add(number1, number2) {
//     console.log(number1 + number2);
// }
// // +
// // -
// // *
// // /
// add(222, 789)



//Operators

//Arithmetic
//Comparison
//Assignment
//Logical
//Bitwise

//Arithmetic Operators
// let number1 = 55;
// let number2 = 33;

// // console.log(number1 + number2);
// // console.log(number1 - number2);
// // console.log(number1 * number2);
// // console.log(number1 / number2);
// // console.log(number1 % number2);
// // console.log(number1 ** number2);

// //Increment (++)
// // console.log(++number1);
// // console.log(number1);

// //Decrement (--)
// console.log(number1--);
// console.log(number1);


//Comparison Operators
// let x = 5;

//Equality Operators
// console.log(x === 5);// 5===5
// console.log(x !== 5);// 5 !== 5


//Relational Operators
// console.log(x < 5);//less than
// console.log(x <= 5);//less than or equal too
// //true,false

// console.log(x > 5);//greater than
// console.log(x >= 5);//greater than or equal too
// //true,false


//String comparison
// console.log('Alen' < 'Anbu');//checks dictionary type
// A - A
// N - L

// //Comparison of different type
// console.log('1' < 5);//1 < 5
// console.log(true == 0);
// // 1 - true
// // 0 - false


//Strict Equality operator(Datatype + Value)
// console.log(1 === 1);//Number === Number
// console.log('1' === 1);//String === Number

// //Lose Equality operator
// console.log(1 == 1);//Number == Number
// console.log('1' == 1);//String == Number
// console.log(false == '1');//Boolean == String


//Ternary Operators
//If person's age is more than 18,
//They are 'Adult' category, otherwise,
//They are a 'Child' category

// let age = 17;

// // if (condition) {
// //     //condition runs
// //     let type = 'Adult Ticket';
// // } else {
// //     //else runs
// //     let type = 'Child Ticket';
// // }

// let type = age > 18 ? "Adult Ticket" : "Child Ticket"
// //condition ? 'value1' : 'value2'
// console.log(type);


//Logical Operators

// Logical AND (&&)
//returns TRUE if both operands are true
// console.log(true && true);
//highIncome, CIBILScore -> Loan Eligible, Ineligible
// let highIncome = true;
// let CIBILScore = true;

// let eligiblePerson = highIncome && CIBILScore
// console.log("Status:" + eligiblePerson);


// Logical OR (||)
//returns TRUE if anyone operands are true
// console.log(false || true);
// let highIncome = false;
// let CIBILScore = true;

// let eligiblePerson = highIncome || CIBILScore
// console.log("Loan Status:" + eligiblePerson);


// Logical NOT (!)
//returns opposite value from given value
// console.log(!true);
// let highIncome = true;
// let CIBILScore = true;

// let eligiblePerson = highIncome && CIBILScore

// let applicationStatus = !eligiblePerson

// console.log("Loan Status:" + eligiblePerson);
// console.log("Application Status:" + applicationStatus);

//Falsy (false)
//undefined
//null
//0
//false
//'' -> ""
//NaN

//Truthy (Anything that is not falsy is truthy)

// let userColor = "red";
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor

// console.log("Selected Color: " + currentColor);



//Bitwise Operators
//Human code -> Machine code
//1 -> 00000001 -> 1
//2 -> 00000010 -> 2
//R -> 00000011 -> 3//OR
//R -> 00000000 -> 3//AND

// console.log(1 | 2);//Bitwise OR
// console.log(1 & 2);//Bitwise AND

//W -> 00000100 -> Write
//R -> 00000010 -> Read
//E -> 00000001 -> Execute

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;

// myPermission = myPermission | readPermission | writePermission;

// let message = (myPermission & readPermission) ? 'yes' : 'no';

// console.log(message);



//Operator precedence

// let x = 2 + 4 * 10

// console.log(x);


// let x = (2 + 4) * 10

// console.log(x);



//Conditional Statements

// let condition = true;

// if (condition) {
//     console.log("Condition: True");
// }

// else {
//     console.log("Condition: False");
// }


// let weather = "Cold";

// if (weather) {
//     console.log("Weather is cold");
// }

// else {
//     console.log("Weather is hot");
// }


// let isRaining = false;
// let isCloudy = false;

// if (isRaining || isCloudy) {
//     console.log("Don't forget to take umbrella");
// }

// else {
//     console.log("Sky is normal! Enjoy the weather");
// }


// if hour is between 12am(0) to 1pm(13) -> good morning
// else if hour is between 1pm(13) to 5pm(17) -> good afternoon
// else hour is between 5pm(17) to 12am(0) -> good evening

// let hour = 18;

// if (hour >= 0 && hour <= 13) {
//     console.log("good morning");
// }

// else if (hour >= 13 && hour <= 17) {
//     console.log("good afternoon");
// }

// else {
//     console.log("good evening");
// }



// let hrs = new Date();
// let hour = hrs.getHours();

// if (hour >= 0 && hour <= 13) {
//     console.log("good morning");
// }

// else if (hour >= 13 && hour <= 17) {
//     console.log("good afternoon");
// }

// else {
//     console.log("good evening");
// }



// let hour = new Date().getHours();

// if (hour >= 0 && hour <= 13) {
//     console.log("good morning");
// }

// else if (hour >= 13 && hour <= 17) {
//     console.log("good afternoon");
// }

// else {
//     console.log("good evening");
// }




//switch case

//S
//A
//B
//E
//U

// let grade = "A";

// switch (grade) {
//     case "S":
//         console.log("Super Grade");
//         break;

//     case "A":
//         case "B":
//         console.log("Excellent Grade");
//         break;

//     case "E":
//         console.log("Just Pass!");
//         break;

//     case "U":
//         console.log("Failed Grade");
//         break;

//     default:
//         console.log("Unknown Grade");
// }


// let marks = 60;

// switch (true) {
//     case marks > 90:
//         console.log("Super Grade");
//         break;

//     case marks > 50:
//         console.log("Pass");
//         break;

//     case marks < 50:
//         console.log("Failed");
//         break;

//     default:
//         console.log("Unknown Grade");
//         break;
// }



//Object brief

// let name = "Siva";
// let age = 28;
// let interest = ['Creating,new things.'];
// let address = {
//     city: "Chennai",
//     State: "Tamil Nadu",
// }

// function greeting() {
//     // let msg = "My name is " + name + ", i love" + interest;
//     let msg = `My name is ${name}, i love ${interest}`;
//     console.log(msg);
// }
// greeting();


// let person = {
//     name: "Siva",
//     age: 28,
//     interest: ['Creating,new things.'],
//     isAlive: true,
//     address: {
//         city: "Chennai",
//         State: "Tamil Nadu",
//     },

//     greeting: function () {
//         // let msg = "My name is " + name + ", i love" + interest;
//         let msg = `My name is ${this.name}, i love ${this.interest}`;
//         console.log(msg);
//     }
// };
// console.log(person.greeting());



//primitive string values

// let firstName = "Siva";
// let lastName = "Prathap";

// const firstName2 = new String("Siva");



//adding array elements

// const number = ["Apple", "Lemon", "Grapes"]

// number[3] = "Orange"

// console.log(number);


// const number = ["Apple", "Lemon", "Grapes"]
// //push
// // number.push("Orange", "Strawberries")

// //Unshift
// number.unshift("Gauva")

// //Splice
// number.splice(3, 0, "Watermelons", "Bananas")

// console.log(number);


//emptying array
// let numbers = [1, 2, 3, 4];

// let another_numbers = numbers;

// //solution 1
// numbers = [];

// //solution 2
// numbers.length = 0;

// //solution 3
// numbers.splice(0, numbers.length);

// //solution 4
// while (numbers.length) numbers.pop();

// console.log(numbers);


//Combining Arrays
const shopping_cart = ["Maagi", "Beans", "Masala"];
const additional_cart = ["MatchBox", "Salt"];

let recipe = shopping_cart.concat(additional_cart);
console.log(recipe);