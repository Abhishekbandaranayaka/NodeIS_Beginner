for(let i =0;i<10;i++){
    // 5 , 8
    if (i==5 || i==8){
       // break;
       continue; // The number 5 is skip by this countinue
    }
    console.log("Hello World!",i);
}

const x ="Hello";;
for(let i of x){
    console.log(i);
}