
//compile time error

//syntax error
// console.log(1;


//Runtime error
// //Reference error
// console.log(x);


// try{    
//     console.log("try block starts here");
//     //error -> reference error
//     console.log(x);
//     console.log("try block ends here")

// }
// catch(err) {
//     //define krte h, error k sath aap kya krna chahte h 
//     //retry logic //fallback mechanism //logging
//     //custom error
//     console.log("I AM INSIDE CATCH BLOCK")
//     console.log("Your error is here: ", err );
// }
// finally{
//     console.log("I will run everytime, as i am finally block")
// }



//let's create a custom error

// try{
//     //Reference error
//     console.log(x);
// }
// catch(err) {
//     throw new Error("Bhai pehle declare kro, fer print karna");
// }

let errorCode = 100;
if(errorCode == 100 ) {
    throw new Error("Invalid Json");
}