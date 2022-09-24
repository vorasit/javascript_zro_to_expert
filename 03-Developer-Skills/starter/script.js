// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;
if(x == 23) console.log(23);
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));

*/

/*
const temperatures = [3,-2,-6,-1, 'error',9,13,17,15,14,9,5]

const calcTempAmplitude = function (temps) {

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i< temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }

    console.log(max,min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


// merag to array
const calcTempAmplitudeNew = function (t1,t2) {

    const temps = t1.concat(t2)
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i< temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }

    console.log(max,min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5]);
console.log(amplitudeNew);

*/

/*
// Debug
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // C) FIX
        value: Number(prompt('Degress celcius: ')),
    };

    console.log(measurement);
    // B) FIND
    console.table(measurement);

    console.log(measurement.value);
    //console.warn(measurement.value);
    //console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}
// A IDENTIFY
console.log(measureKelvin());
*/

/*
// Using a debugger
const calcTempAmplitudeNew = function (t1,t2) {

    const temps = t1.concat(t2)
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i< temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        //debugger;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }

    console.log(max,min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5]);
console.log(amplitudeNew);
*/

// -----------------Coding Challenge #1 -------------------------------

function printForecast(arr1,arr2){
    const arr3 = arr1.concat(arr2)
    let str = ``;
    let j = 1;
    for(let i=0;i<arr3.length;i++){
        debugger;
        str = str + `${arr3[i]}ºC in ${j} days... `;
        j++;
    }
    return str;
}

console.log(printForecast([17, 21, 23],[12, 5, -5, 0, 4]));