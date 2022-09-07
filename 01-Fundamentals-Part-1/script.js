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
