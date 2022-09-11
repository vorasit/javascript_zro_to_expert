/*
let js = 'amazing';

console.log("Jonas")
console.log(23);

let firstName = "Jonas"
let first = 'jonas'
let firstNamePerson = ''
let first_name = ''
console.log(firstName)

let country = 'Portugal';
let continent = 'Europe';
let population = 10;
console.log(country)
console.log(continent)
console.log(population)

// variable name conventions
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun)
console.log(typeof javascriptIsFun)

javascriptIsFun = 'YES!';
console.log(javascriptIsFun)
console.log(typeof javascriptIsFun)

let year;
console.log(year)
year = 1996;
console.log(year)
console.log(typeof year)

console.log(typeof null)
*/

/*
let language;
language = 'thai';
const country = 'thailand';
const continent = 'asia';
const island = false;
//island = true;

var job = 'programmer';
job = 'teach';
console.log(job)

console.log(typeof island)
console.log(typeof language)
console.log(typeof country) 
*/
/*
const now = 2022;
const ageJonas = now - 1991;
const ageSarah = now - 1996;

console.log(ageJonas,ageSarah)

console.log(ageJonas >= ageSarah)
console.log(25 - 10 - 5)
*/

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
/*
const massMark = 78;
const heightMark = 1.69;
let BMIMark = massMark / (heightMark * heightMark)
console.log(BMIMark)

const massJohn = 92;
const heightJohn = 1.95;
let BMIJohn = massJohn / (heightJohn * heightJohn)
console.log(BMIJohn)

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)
// ---------------------------- data 2 -----------------------------------
const massMark2 = 95;
const heightMark2 = 1.88;
BMIMark = massMark2 / (heightMark2 * heightMark2)
console.log(BMIMark)

const massJohn2 = 85;
const heightJohn2 = 1.76;
BMIJohn = massJohn2 / (heightJohn2 * heightJohn2)
console.log(BMIJohn)

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)
*/

/*
const firstName = 'Pin';
const job = 'Programer';
const birthYear = 1996;
const year = 2022

const pin = "I'm " + firstName + ', a '+ (year-birthYear) + ' years old ' + job + '!';
console.log(pin) 

const pinNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}`;
console.log(pinNew)

console.log(`just a regular string.....`);

console.log(`String with \n\ 
multiple \n\
line`);

console.log(`String with 
multiple 
line`);
*/

/*
const age = 15;

if(age >=18){
    console.log('pin can start driving license');
} else{
    const yearLeft = 18 - age;
    console.log(`pin is too young. wait another ${yearLeft} years :)`)
}

const birthYear = 1996;
let century
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century)
*/

// ---------------- challenge 2 ------------------
/*
const massMark = 78;
const heightMark = 1.69;
let BMIMark = massMark / (heightMark * heightMark)
console.log(BMIMark)

const massJohn = 92;
const heightJohn = 1.95;
let BMIJohn = massJohn / (heightJohn * heightJohn)
console.log(BMIJohn)


if(BMIMark > BMIJohn){
    console.log(`Mark's BMI(${BMIMark}) is higher than John's (${BMIJohn})!`)
}else{
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
*/

/*
// convertion type variable
const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(inputYear+18)
console.log(Number(inputYear)+18)

console.log(Number('pin'))
console.log(typeof NaN)
console.log(String(26),26)

// type coercion
console.log('I am ' + 26 + 'years old')
console.log('23' - '10' -3)
console.log('23' * '3')

let n = '1' + 1;
n = n-1;
console.log(n);
*/

/*
// 5 false have 0,'',NaN,null,undefined
const money = undefined;
if (money) {
    console.log("Don't spend it all")
} else {
    console.log("you should get a job")
}
*/

/*
const age = '18';
if(age === 18){
    console.log('you just became an adult:D (strict)')
}

if(age == 18){
    console.log('you just became an adult:D (loose)')
}

const favourite = Number(prompt('what is your favourite number?'))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) {
    console.log('cool 23')
} else if(favourite === 7){
    console.log('cool 7')
} else if(favourite === 9){
    console.log('cool 9')
}else {
    console.log('not cool 23 or 7 or 9')
}

if (favourite !== 23) console.log('why not 23')
*/
/*
// logical operator
const hasDrivesLicense = true; // A
const hasGoodVision = true;  // B
console.log(hasDrivesLicense && hasGoodVision);
console.log(hasDrivesLicense || hasGoodVision);
console.log(!hasDrivesLicense)

// if(hasDrivesLicense && hasGoodVision){
//     console.log("sarah is able to drive!")
// }else{
//     console.log('someone else should drive')
// }

const isTired = false;// C
console.log(hasDrivesLicense && hasGoodVision && isTired);

if(hasDrivesLicense && hasGoodVision && !isTired){
    console.log("sarah is able to drive!")
}else{
    console.log('someone else should drive')
}
*/

// ------------- Coding Challenge #3 --------------------------
/*
const Dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3;
if (Dolphins > Koalas) {
    console.log(`Dolphins is Winner Score: ${Dolphins}`)
} else if(Koalas > Dolphins){
    console.log(`Koals is Winner Score ${Koalas}`)
} else {
    console.log('draw means they have the same average score')
}

// Bonus1
const Dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3;
if (Dolphins > Koalas && Dolphins >= 100) {
    console.log(`Dolphins is Winner Score: ${Dolphins}`)
} else if(Koalas > Dolphins && Koalas >= 100){
    console.log(`Koals is Winner Score ${Koalas}`)
} else if (Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100) {
    console.log('draw means they have the same average score')
}else{
    console.log('Both is not condition')
}

*/

/*
//--------- switch -------------
const day = 'monday';
switch (day) {
    case 'monday':
        console.log('monday is fun');
        break;
    case 'tuesday':
        console.log('tuesday is good');
        break;
    case 'wednesday':
        console.log('wednesday is ok');
        break;
    case 'thursday':
        console.log('thursday is orange');
        break;
    case 'friday':
        console.log('friday is sky');
        break;
    case 'saturday':
        console.log('saturday is viored');
        break;
    case 'sunday':
        console.log('sunday is red');
        break;
    default:
        console.log('Not a valid day!');
        break;
}
*/

/*
const day = 'monday';
if(day === 'monday'){
    console.log('monday is fun');
}else if(day === 'tuesday'){
    console.log('tuesday is good');
}else if(day === 'wednesday'){
    console.log('wednesday is ok');
}else if(day === 'thursday'){
    console.log('thursday is orange');
}else if(day === 'friday'){
    console.log('friday is sky');
}else if(day === 'saturday'){
    console.log('saturday is viored');
}else if(day === 'sunday'){
    console.log('sunday is red');
}else{
    console.log('Not a valid day!');
}
*/

