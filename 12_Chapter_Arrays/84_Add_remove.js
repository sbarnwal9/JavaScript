let arr = [1,2,3];
console.log (arr);

//Add to End
arr.push(4);
console.log(arr);

//Remove from End
arr.pop();
console.log(arr);

add.push(5,6);
console.log(arr);

//Add from beggining
arr.unshift(0);
console.log(arr);

//Remove from beggining
arr.shift(0);
console.log(arr);

// [1,2,3,4,5,6]
arr.splice(2,1);
console.log(arr);

arr.splice(2,0,99);
console.log(arr);

arr.splice(2,1,99);
console.log(arr);

arr.splice(2,2,99);
console.log(arr);