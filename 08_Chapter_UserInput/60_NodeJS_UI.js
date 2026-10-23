const readline = readline ('readline');

const rl = readline.createInterface({
    input : Process.stdin ,
    output : process,stdout,

})

rl.question("Enter a number: " ,(input) => {
    let num = prompt("Enter a number"); 
num = Number(num);

if (num % 2 === 0) {
    console.log("Even");
}else {
    console.log(num + "is ODD");
}

rl.close();
});
