p1 == p2;  //(type)
Dominos === PizzaHut ;  //(value and type)

console.log (5 == "5");  //true , loose comparison ,value is same but type is different
console.log (5 === "5");  //false , strict not allowed , value is same but type is different

console.log (5 != "5");  //false , loose comparison ,value is same but type is different
console.log (5 !== "5");  //true , strict not allowed , value is same but type is different

console.log (5===5);  //true , strict comparison ,value is same and type is same

//1. Empty string 0 vs "0" (transitive comparison)
console.log ("" == 0);  //true 
console.log ("0" == 0);  //true
console.log ("" == "0");  //false , both strings and compared with each other , not transitive comparison   


// === fixes it
console.log("" === 0);  //false
console.log("0" === 0);  //false
console.log("" === "0");  //false
