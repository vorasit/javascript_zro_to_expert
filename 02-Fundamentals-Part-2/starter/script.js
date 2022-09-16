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

