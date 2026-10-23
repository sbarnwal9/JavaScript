//Problem - Statement
//Score- 0 to 100
//Score> 90 -> A
//Score> 80 to 90 -> B
//Score> 70 to 80 -> C
//Score 60 to 700 -> D
//Score 50 to 60 -> E
//Score < 50 -> F
let score = 85;
if (score > 90) {
    console.log("Grade A - Excellent");
} else if (score > 80 && score <= 90) {
    console.log("Grade B - Good");
} else if (score > 70 && score <= 80) {
    console.log("Grade C - Average");
} else if (score > 60 && score <= 70) {
    console.log("Grade D - Below Average");
} else if (score > 50 && score <= 60) {
    console.log("Grade E - Poor");
} else {
    console.log("Grade F - Fail");
}