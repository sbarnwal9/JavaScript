let tests = ["login","checkout","search"];

for (let index = 0; index < tests.length ; index++ ) {
    const element = array[index];
    console.log(element);
}
console.log("-----------------------");

// for ..of (cleanest for values)
for (let test of tests) {
    console.log(test) //value
}
console.log("----");


//forEach --no return value
tests.forEach(test,index) ; {
        console.log(`${index}: ${test}`);
}

// entries() = index + value
for(let [i,test] of tests.entries()) {
    console.log(i, test);
}

let students = ["methis", "senthils","ajay","rahul"]

for (let student in students) {
    console.log(student, " => ", students[student]); // index = n
}