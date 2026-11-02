const user = {
    name : "John",
    age : 30 ,
    email : "john@example.com"
}

console.log(user);

//Accessing Properties
console.log(user.name);
console.log(user["age"]);

//Adding/modifing properties
user.city = "NYC";
user.age = 31;

console.log(user);