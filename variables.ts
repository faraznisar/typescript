let apple: string = "red";

console.log(apple);

//Array
let colors: string[] = ["blue", "red", "green"];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes

class Car {}

let car: Car = new Car();

//Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
console.log(point);

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
logNumber(3);

//when to use annotations
//1) funtion that returns "any" type

const json = '{"x": 10, "y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
