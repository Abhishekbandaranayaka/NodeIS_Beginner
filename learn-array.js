// let names = ["nimal","saman","sunil"];
// index - 0,1,2
// console.log(names);
// console.log(names[2]);
// console.log(names[5]);
// console.log(names[0]);

// names[0]="kamal";
// console.log(names[0]);

// console.log(names.length);

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// for (let name of names){
//     console.log(name);
// }

// names[3]="nimal";
// console.log(names);
// names.push("Abhishek");
// console.log(names);
// names.unshift("Sandeepa");
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);


// console.log(process.argv);

const marks = process.argv[2];

if(marks>50){
    console.log("Pass")
}