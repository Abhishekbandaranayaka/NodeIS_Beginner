/*
deteramine the escape velocity of the panetx if its radius is 7149 Km qand mass is 1.898 x 10+27kg
v = ~/2GM/R
G = 6.673x10-11 N.m2/Kg2

*/
const G = 6.673e-11;
const radius = 7149e3;
const mass = 1.898e27

let velocity =  Math.sqrt( 2*G*mass/radius);

console.log("The Velocity = "+velocity.toFixed(2));