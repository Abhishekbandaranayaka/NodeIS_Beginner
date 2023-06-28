/*
Find the diameter, area and circumference of a circle of radius 20 cm.
Diameter of a circle D = 2 * r
Circumference of a circle C =  2 * PI * r
Ares of a Circle A = PT * r * r
PI = 3.141
*/

// let radius = 20;
let radius = process.argv[20];
//const PI = 3.141; // It is not change(Constant Variable)
const PI =Math.PI;
let diameter;
diameter = 2*radius;
let circumferencer = 2*PI*radius;
//let area = PI*radius*radius;
let area = PI*radius**2;

console.log(PI);
console.log("Diameter := "+diameter.toFixed(3)); // tofixed(3) is call as 0.000 
console.log("Circumference := " +circumferencer.toFixed(3));
console.log("Area := "+area.toFixed(3));

