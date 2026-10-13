//3. Numeric Separator (_)

let million = 1_000_000; // 1 million
let BinarySep = 0b1010_1011_1100; // binary literal with separator
let HexSep =0xFF_FF_FF; // hexadecimal literal with separator

//4. BigInt (ES2020) - for large integers
let big = 1234567890123456789012345678901234567890n; // BigInt literal  
let big2 = BigInt(1234567890123456789012345678901234567890); // BigInt using constructor    
let bigFromNumber = BigInt(42); 

console.log("BigInt literal: " + big); //1234567890123456789012345678901234567890
console.log("BigInt from String: " + big2); //1234567890123456789012345678901234567890  
console.log("BigInt from Number: " + bigFromNumber); //42   
console.log("Type of BigInt: " + typeof big); //bigint

