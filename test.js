'use strict'

let secretNumber = Math.trunc(Math.random()*20+1);
console.log(secretNumber);

console.log(addDecl(2,3));

function addDecl(a,b){
    return a + b;
}

const mul = function(a,b){
    return a * b;
}
console.log(mul(5,5));

function myFunction(){
    document.getElementById('demo').innerHTML = "Paragraph changed.";
}

