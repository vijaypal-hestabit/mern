// // function expression  
// function myfun1() {
//     console.log("It is a Function Expression");
// }

// // Anonymous function  
// var myfun2 = function () {
//     console.log("It is an Anonymous Function");
// }




// // arrow function
// //Arrow function  examples
// let myfun3 = () => {
//     console.log("It is an Arrow Function");
// };

// // no need parenthesis for single parameter and no need write return
// let myfun4 = name => `Welcome ${name}`;

// // need parenthesis for multiple parameter and no need write return
// let welcome = (fname, lname = '') => `Welcome ${fname} ${lname}`;

// // need parenthesis for multiple parameter and return 
// let add = (a, b) => {
//     let first = a; 
//     let second = b;
//     return `addition of first and second is ${first + second}`;
// }

// // let myfun5 = fname => `My first name is ${fname}`;

// // myfun1();
// // myfun2();
// // myfun3();  
// // console.log(myfun4('Vijay'));
// // console.log(welcome('Vijay','pal'));
// console.log(add(2, 3))

// let camera = {
//     price:600,
//     weight:2000,
//     desc:function(){
//         return `This camera price is ${this.price}`;
//     }
// }
// console.log(camera.desc())

// limitation in arrow operator cont use this keyword
let camera = {
    price:600,
    weight:2000,
    desc:() => {
        return `This camera price is ${this.price}`;
    }
}
console.log(camera.desc())