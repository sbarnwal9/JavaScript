let environment = "staging";
let baseUrl = environment === "production" ? "https://api.production.com" : "https://api.staging.com";  
console.log(baseUrl); // Output: https://api.staging.com