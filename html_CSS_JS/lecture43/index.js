
//function definition
// function sayMyName() {
//     console.log("Love Babbar")
// }

// //function use - function call
// sayMyName();


// function printCounting() {
//     for(let i=1; i<=100; i++) {
//         console.log(i);
//     }
// }

// printCounting();

// function printNumber(num) {
//     console.log("Printing NUmber:", num);
// }

// printNumber(5);

// function getAverage(num1, num2) {
//     let avg = (num1 + num2)/2;
//     console.log("Average: ", avg);
// }

// getAverage(3,70);


//return functions

// function getSum(a,b,c) {
//     let sum = a + b + c;
//     return sum;
// }

// let ans = getSum(1,2,3);
// console.log("Printing Sum: ", ans);

// function getMyName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;
//     //unreachable statements
// //     let a = 10;
// //     let b= 15;
// //     let sum = a + b;
// //     console.log(sum);
// }

// let fullName = getMyName(7, 7);
// console.log("Full Name: ", fullName);


// const getMultiplication = function (a,b) {
//     return a*b;
// }

// let ans = getMultiplication(2,20);
// console.log(ans);

// let squareNumber = function(num) {
//     let ans = num**2;
//     return ans;
// }


// let ans = squareNumber(5);
// console.log(ans);

let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}

console.log(getExp(2,10));
