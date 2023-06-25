/*
A = Exellent
B = Very Good
C = Good
S = Pass
W = Fail
*/

const result = "C";

switch(result){
    case "A":
        console.log("Exellent");
        break;
    case "B":
        console.log("Very Good"); 
        break;
    case "C":
        console.log("Good"); 
        break;
    case "S":
        console.log("Pass"); 
        break;
    case "W":
        console.log("Fail"); 
        break;
    default:
        console.log("Input is not valid");
}