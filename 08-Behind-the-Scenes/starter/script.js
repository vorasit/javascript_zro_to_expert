'use strict';
/*
function calAge(birthYear){
    const age = 2037 - birthYear;
    //console.log(firstName);

    function printAge(){
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            // create new variable with same name as outer scope variable
            const firstName = 'Steven';

            // reassingning outer scope variable
            output = 'new output';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b){
                return a + b;
            }

        }
        console.log(millenial);
        // console.log(add(2,3)); // dont use stict 
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas'; // Global variable
calAge(1991);
*/

/*
// variable
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// function
console.log(addDecl(2,3));
//console.log(addExpr(2,3));
//console.log(addArrow(2,3));

function addDecl(a,b){
    return a + b ;
}

const addExpr = function (a,b){
    return a + b ;
}

const addArrow = (a,b) => a+b;

// example
console.log(undefined);
if(!numProducts) deleteShopingCart();
var numProducts = 10;
function deleteShopingCart(){
    console.log('all product delete! ');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//console.log(this);

/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
}
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/*
//var firstName = 'Matilda';
const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);

        // solution 1
        // const self = this; // self or that
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     //console.log(this.year >= 1981 && this.year <= 1996);
        // }

        // solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
            
        }
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);// Hey undefined
    },
    // greet: function() {
    //     console.log(this);
    //     console.log(`Hey ${this.firstName}`);
    // },
};
jonas.greet();
// console.log(this.firstName);
jonas.calcAge();

// argument keyword
const addExpr = function (a,b){
    console.log(arguments);
    return a + b ;
};
addExpr(2,5);
addExpr(2,5,8,12);

const addArrow = (a,b) => {
    console.log(arguments);
    return a+b;
};
addArrow(2,5,8)

*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age=2;
console.log('Friend: ',friend);
console.log('Me ',me);
*/

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// ref types
const jessica = {
    firstName: 'Jessica',
    lastName: 'williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Devis'
console.log('Before marriage: ',jessica);
//marriedJessica.lastName = 'Devis'
console.log('After marriage: ',marriedJessica);

// marriedJessica = {};

// copying obj
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'williams',
    age: 27,
    family: ['Alice','Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ',jessica2);
console.log('After marriage: ',jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('john');
console.log('Before marriage: ',jessica2);
console.log('After marriage: ',jessicaCopy);
