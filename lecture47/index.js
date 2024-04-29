

function getAge() {
    return 190;
}


function utility(name = "Love", age = getAge()) {
   console.log(name, " ", age); 
}

utility();





// function solve(value = "Rahul") {
//     console.log("HELLO JII -> ", value);
// }
// solve(undefined);
// function sayName(fName = "Uday", lName = fName.toUpperCase()) {
//     console.log("My Name is: ", fName," ", lName);
// }

// sayName("Love");





// class Human {
//     //properties
//     age; // public
//     #wt = 80; //private
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }


//     //behaviour

//     #walking(){
//         console.log("I am Walking ", this.#wt);
//     }

//     running() {
//         console.log("I am running")
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }

// let obj = new Human(50, 190,101);
// console.log(obj.fetchWeight);

// obj.walking();