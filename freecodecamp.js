//1. Comment Your JavaScript Code:

//This is first comment
/*This is
 second comment */

//2. Declare JavaScript Variables:

var myName;
myName = '2. Dmitriy';
console.log (myName);

//3. Storing Values with the Assignment Operator:

var a;
a = 7;

//4. Assigning the Value of One Variable to Another:

var a;
a = 7;
var b;
b = a;

//5. Initializing Variables with the Assignment Operator:

var a = 9;

//6. Declare String Variables:

var myFirstName = "Dmitriy";
var myLastName = "Totskiy";

//7. Understanding Uninitialized Variables:

var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

//8. Understanding Case Sensitivity in Variables:

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//9. Explore Differences Between the var and let Keywords:

let catName = "Oliver";
let catSound = "Meow!";

//10. Declare a Read-Only Variable with the const Keyword:

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//11. Add Two Numbers with JavaScript::

const sum = 10 + 10;

//12. Subtract One Number from Another with JavaScript:

const difference = 45 - 33;

//13. Multiply Two Numbers with JavaScript:

const product = 8 * 10;

//14. Divide One Number by Another with JavaScript:

const quotient = 66 / 33;

//15. Increment a Number with JavaScript:

let myVar = 87;

// Only change code below this line
myVar++;

//16. Decrement a Number with JavaScript:

let myVar = 11;

// Only change code below this line
myVar--;

//17. Create Decimal Numbers with JavaScript:

const ourDecimal = 5.7;
// Only change code below this line
let myDecimal = 1.2;

//18. Multiply Two Decimals with JavaScript:

const product = 2.0 * 2.5;

//19. Divide One Decimal by Another with JavaScript:

const quotient = 4.4 / 2.0; // Change this line

//20. Finding a Remainder in JavaScript:

const remainder = 11 % 3;

//21. Compound Assignment With Augmented Addition:

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//22. Compound Assignment With Augmented Subtraction:

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

//23. Compound Assignment With Augmented Multiplication:

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

//24. Compound Assignment With Augmented Division:

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//25. Escaping Literal Quotes in Strings:

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

//26.Quoting Strings with Single Quotes:

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//27. Escape Sequences in Strings:

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//28. Concatenating Strings with Plus Operator:

const myStr = "This is the start." + " This is the end."; // Change this line

//29. Concatenating Strings with the Plus Equals Operator:

let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";

//30. Constructing Strings with Variables:

// Only change code below this line
const myName = "Dmitriy ";
const myStr = "My name is " + myName + "and I am well!";

//31. Appending Variables to Strings:

// Change code below this line
const someAdjective = "cool!";
let myStr = "Learning to code is ";
myStr += someAdjective;

//32. Find the Length of a String:

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//33. Use Bracket Notation to Find the First Character in a String:

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//34. Understand String Immutability:

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

//35. Use Bracket Notation to Find the Nth Character in a String:

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

//36. Use Bracket Notation to Find the Last Character in a String:

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

//37. Use Bracket Notation to Find the Nth-to-Last Character in a String:

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName [lastName.length - 2]; // Change this line

//38. Word Blanks:

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
let wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard."; // Change this line
// Only change code above this line

//39. Store Multiple Values in one Variable using JavaScript Arrays:

// Only change code below this line
const myArray = ["one", 1];

//40. Nest one Array within Another Array:

// Only change code below this line
const myArray = [["one", 1], ["two", 2]];

//41. Access Array Data with Indexes:

const myArray = [50, 60, 70];
let myData = myArray[0];

//42. Modify Array Data With Indexes:

// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line

//43. Access Multi-Dimensional Arrays With Indexes:

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//44. Manipulate Arrays With push Method:

// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
// Only change code below this line

//45. Manipulate Arrays With pop Method:

// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
// Only change code below this line

//46. Manipulate Arrays With shift Method:

// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
// Only change code below this line

//47. anipulate Arrays With unshift Method:

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
// Only change code below this line

//48. Shopping List:

const myList = [["Banana", 1], ["Apple", 2], ["Orange", 3], ["Pineapple", 4], ["Watermelon", 5]];

//49. Write Reusable JavaScript with Functions:

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction()

//50. Passing Values to Functions with Arguments:

function functionWithArgs (param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs (1,2);


