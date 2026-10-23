let statusses = ["pass","fail","skip"];

console.log(statuses[0]); //pass
console.log(statuses[2]); //skip
console.log(statuses.at[-1]); //skip
console.log(statuses.at[-2]); //fail
console.log(statuses.at[-3]); //pass

statuses[1] ="blocked";
console.log(statuses);
console.log(statuses.length);