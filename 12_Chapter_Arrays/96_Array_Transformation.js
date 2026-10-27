//Map and Filters


//every vs some

//every --All must pass
console.log([80,90,85].every(s => s >= 70));  //true

console.log([80,60,85].every(s => s >= 70)); //false

//some --atleast one should pass
console.log([80,60,85].every(s => s < 70));  //true
console.log([80,90,85].every(s => s >= 70)); //false