// // const user1={
// //     id:1,
// //     name:"abhishek",
// //     password:"pass123",
// //     login:function(){
// //         console.log(this.name);
// //     },
// //     logout:()=>{
// //         console.log("Logout");
// //     }

// // }
// // console.log(user1);
// // user1.login();
// // user1.logout();

// class User{
//     constructor(uid="0",uname="null",upassword="nopassword"){
//         this.id=uid;
//         this.name=uname;
//         this.password=upassword;
//     }
//     login(){
//         console.log(this.name);
//     }
// }
// const user2=new User(2,"abhi","pass1234");

// const user3=new User();
// console.log(user2);
// console.log(user3);

// // const user1=new User();
// // user1.name="Abishek";
// // user1.password="pass123";
// // user1.id=1;
// // console.log(user1);

// // for(const x in user1){
// //     console.log(x);
// // }

// // user1.login();

class User{
    id;
    name;
    password;

    logIn=()=>{
        console.log(this.name);
    }
}

const user1=new User();
user1.name="Abhi";
console.log(user1);

user1.logIn();