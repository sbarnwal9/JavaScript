let num = prompt("Enter a number"); // It will only work in browser
num = Number(num);

if (num % 2 === 0) {
    console.log("Even");
}else {
    console.log(num + "is ODD");
}