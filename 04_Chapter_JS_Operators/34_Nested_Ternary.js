//Nest Ternary
//Multiple Condition
//age = 26;
//age >18 -> Go Goa, age> 25 -> Drink;

let age = 26;

let is_pramod_enjoy1= (age > 18) ? "Goa" : "Not Goa";
console.log(`you can enjoy: ${is_pramod_enjoy}`); // Output: you can enjoy: Goa

let is_drinking_allowed = (age > 25) ? "Yes" : "No";
console.log(`Are you allowed to drink? ${is_drinking_allowed}`); // Output: Are you allowed to drink? Yes

let is_pramod_enjoy= (age > 18) ? ((age > 25) ? "Goa and Drink" : "No Drink , Only Goa") : "Not Goa";
console.log(`you can enjoy: ${is_pramod_enjoy}`); // Output: you can enjoy: Goa and Drink