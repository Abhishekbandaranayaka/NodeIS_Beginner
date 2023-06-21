/*
G = 6.673*10-11  N.m2/Kg2
The radius of the Earth is - 6.38 x 10*6 m
The mass of the Earth is - 5.98 x 10*24 kg.
Satelite is orbiting the Earth 400 km above the surface
what acceleration due to gravity does it experience?

g=GM/(r+h)**2
*/

const G = 6.673e-11; //   000000000006.673 e-11(Scientific method)
const radius = 6.38e6;
const mass = 5.98e24;
let hight = 400e3;

let acceleration = G*mass/(radius+hight)**2;

console.log("acceleration ="+acceleration);