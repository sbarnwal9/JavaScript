//Primitive datatypes - call by value
//Primitive, number, string, boolean, null, undefined

let a= 10;
let b = a;
b = 99;
console.log(a);
console.log(b);

//Objects - the reference value is copied ,so both the values points to
//reference - object ,array, function
let obj1 = {val : 10};
let obj2 = obj1;
obj2 = 99;
console.log(obj1.val);