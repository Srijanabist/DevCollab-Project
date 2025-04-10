let start = Number(prompt("Enter the start number:"));
let end = Number(prompt("Enter the end number:"));

console.log("even numbers are :");
for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
  console.log("Odd numbers are:");
for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {  
        console.log(i);
    }
}

