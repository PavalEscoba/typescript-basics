const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date;

// arrays
let colors: string[] = ['red', 'blue', 'white'];
let myNumbers: number[] = [1, 1, 1];

// object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}

// Classes

class Car { };

const car: Car = new Car();

// When to use TA
// 1) When f-n returns any value
const json = '{"x":10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{"x":10, "y": 20} and type is 'any'
coordinates.asdas // no error

// to fix

const json_fix = '{"x":10, "y": 20}';
const coordinates_fix: { x: number, y: number } = JSON.parse(json);
console.log(coordinates); //{"x":10, "y": 20} and type is 'any'
coordinates_fix // ERROR

// 2) When we declare and initialize variables on different lines
let words = ['red', 'blue', 'white'];
let foundWord;

words.forEach(word => word === 'white' ? foundWord = true : null);
console.log(foundWord);

// 3) Variable whose type cannot be inferred correctly
let numbers = [-1, -200, 3];
let numberAboveZero: boolean | number = false;

numbers.forEach(number => number > 0 ? numberAboveZero = number : null);
console.log(numberAboveZero);

