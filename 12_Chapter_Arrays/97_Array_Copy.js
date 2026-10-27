let original = [1, 2, 3];
let copy1 = [...original];
console.log(copy1);

let copy2 =original.slice();
console.log(copy2);
copy2.push(92);
copy1.push(91);
console.log(original);
console.log(copy1);
console.log(copy2);

// Deep copy
let deep_copy_array = original;
deep_copy_array.push(91);

console.log(original);
console.log(deep_copy_array);

