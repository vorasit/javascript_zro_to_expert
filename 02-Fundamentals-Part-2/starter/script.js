'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive ')
*/

/*
function logger(){
    console.log('My name is pin');
}
// calling
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

*/

/*
// function declaration
function calcAge1(birthYeah){
    return 2037 - birthYeah;
}

const age1 = calcAge1(1996);
console.log(age1);

// function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah
}
const age2 = calcAge2(1996)

console.log(age1,age2)

*/

/*
// Arrow Function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1996)
console.log(age3)

const yearsUnitRetirement = (birthYeah,firstName) => {
    const age = 2037 - birthYeah;
    const retirment = 65 - age;
    //return retirment;
    return `${firstName} retires in ${birthYeah} year`;
}
console.log(yearsUnitRetirement(1996,'pin'))
*/

/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples,oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece pf oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/

/*
const calcAge = function(birthYeah){
    return 2037 - birthYeah;
}


const yearsUnitRetirement = function (birthYeah,firstName)  {
    const age = calcAge(birthYeah);
    const retirment = 65 - age;

    if (retirment > 0) {
        console.log(`${firstName} retires in ${retirment} years`)
        return retirment;
    }else{
        console.log(`${firstName} has already retired`)
        return -1;
    }

    //return retirment;
    //return `${firstName} retires in ${retirment} years`;
}

console.log(yearsUnitRetirement(1996,'Pin'));
*/

/*
//----------------------- Coding Challenge #1 ------------------------------------

const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;
const AvgDolphins = calcAverage(44,23,71);
const AvgKoalas = calcAverage(65,54,49);

function checkWinner(AvgDolphins,AvgKoalas){
    if (AvgDolphins > AvgKoalas) {
        console.log(`Dolphins win (${AvgDolphins} vs. ${AvgKoalas})`);
    }else if (AvgKoalas > AvgDolphins) {
        console.log(`Koalas win (${AvgKoalas} vs. ${AvgDolphins})`);
    }else{
        console.log('No team Not Winner');
    }
}

checkWinner(AvgDolphins,AvgKoalas);

*/

// array
/*
const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years = new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName,'Schmedtmann',2037 - 1991,'teacher',friends];
console.log(jonas)
console.log(jonas.length)
*/

/*
const calcAge = function (birthYeah) {
    return 2037 - birthYeah
}
const years = [1990,1967,2002,2010,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3)

const ages = [calcAge(years[0]),
                calcAge(years[1]),
                calcAge(years[years.length - 1])];

console.log(ages)
*/

/*
const friends = ['Michael','Steven','Peter'];
// add element
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John'); // first
console.log(friends);

// remove element
friends.pop(); //last
const popped = friends.pop(); //last
console.log(popped)
console.log(friends);

friends.shift(); // first
console.log(friends)
// ----------------------------------------------------
console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))

if (friends.includes('Steven')) {
    console.log('You have friend called Steven');
}

*/

// ------------ Coding Challenge #2 ------------------------------
/*
let tips = []

function calcTip(bill) {
    if (bill >= 50 && bill <=300) {
        tips.push(bill*0.15)
        return tips
    } else {
        tips.push(bill*0.20)
        return tips
    }
}

const bills = [125,555,44];
calcTip(bills[0])
calcTip(bills[1])
calcTip(bills[2])

let total = [bills[0]+tips[0],
            bills[1]+tips[1],
            bills[2]+tips[2]]

console.log(tips)
console.log(total)
*/

/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven']
];
// object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
}
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
}
console.log(jonas)
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('what do you to know about Jonas? Choose between firstName,lastName,age,job,and friends');
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}else{
    console.log('wrong request Choose between firstName,lastName,age,job,and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonaschmedtman';
console.log(jonas)

// challenge
// jonas has 3 friends and his best friends is called Michael
const j1 = jonas.friends  
// jonas.friends[0]
console.log(j1[0]);

*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense: true,

    //calcAge: function(birthYeah){
    //    return 2037 - birthYeah;
    //}
    
    //calcAge: function(){
    //    console.log(this) // show obj attribute
    //    return 2037 - this.birthYeah;
    //}
    
    calcAge: function(){
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} -year old ${this.job},and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's License `;
    },

};

console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1991));
console.log(jonas.age);
console.log(jonas.getSummary());

*/

// ------------ Coding Challenge #3 ------------------------------
/*
// obj mark
const Mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
};

// obj john
const John = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
};

if (Mark.calcBMI() > John.calcBMI() ) {
    console.log(`Mark's BMI (${Mark.calcBMI()}) is higher than John's (${John.calcBMI()})! `);
}else if(John.calcBMI() > Mark.calcBMI()){
    console.log(`John's BMI (${John.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})! `);
}

*/

/*
// for statement
for(let rep = 1; rep <= 10; rep++){ 
    console.log(`Lifiting weights repetition ${rep} `);
}
*/

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

const types = [];

for(let i=0.; i<jonas.length ;i++){
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991,2007,1969,2020];
const ages = [];

for(let i=0; i<years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages)

// continue and break
console.log('---------ONLY STRING------------');
for(let i=0.; i<jonas.length ;i++){
    if(typeof jonas[i] !== 'string'){
        continue;
    }
    console.log(jonas[i], typeof jonas[i]);
}

console.log('---------BREAK WITH NUMBER------------');
for(let i=0.; i<jonas.length ;i++){
    if(typeof jonas[i] !== 'number'){
        break;
    }
    console.log(jonas[i], typeof jonas[i]);
}
 
*/

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

// 4,3,2,...,0
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i ,jonas[i])
}

for(let exercise = 1; exercise < 4 ; exercise++){
    console.log(`-------------Starting exercise ${exercise}`);
    for(let rep=1; rep<6;rep++){
        console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`);
    }
}
*/

/*
// while
let rep=1;
while(rep <= 10){
    //console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);

while (dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random()*6)+1;
    if (dice === 6) console.log('Loop is about to end....');
}
*/

// ------------ Coding Challenge #4 ------------------------------
/*
const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
let tips = [];
let totals = [];
let i = 0;
function calcTip(bills) {
    while(i < bills.length)
    {
        if (bills[i] >= 50 && bills[i] <=300) {
            tips.push(bills[i]*0.15);
            totals.push(bills[i] + tips[i])
        } else {
            tips.push(bills[i]*0.20);
            totals.push(bills[i] + tips[i])
        }
        i++;
    }
    return totals;
}


console.log(` totals = ${calcTip(bills)}`);
console.log(` tips = ${tips}`);

let sum = 0;
let j = 0;
function calcAverage(arr){
    while(j<arr.length){
        sum = sum + arr[j];
        j++;
    }
    return sum/totals.length;
}

const avg = calcAverage(totals);
console.log(` average = ${avg}`)
console.log(totals.length)
*/

