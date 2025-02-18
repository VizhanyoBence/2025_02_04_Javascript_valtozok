console.log('Változó tipuskonverzó')

"dog" + "house" == "doghouse"; // összekapcsolta a két karakterláncot
console.log("dog" + 4 == "dog4"); // a számot átalakította
console.log(4 + "4" == "44"); // karakterlánccá
console.log(4 + 4 == 8); // összeadta a két számot
console.log(23 - "17" == 6); // a karakterláncot átalakította számmá


let a = "12"; 
let b = "23"; 
console.log(a + b); // "1223"
console.log(parseInt(a) + parseInt(b)); // 35
c = "12.34"; 
console.log(parseInt(c)); //12
console.log(parseFloat(c)); //12.34


console.log(Math.PI); //3.141592653589793
console.log(Math.abs(-23)); //23
console.log(Math.ceil(3.21)); //4
console.log(Math.ceil(-3.21)); //-3
console.log(Math.floor(3.67)); //3
console.log(Math.floor(-3.67)); //-4
console.log(Math.round(3.45)); //3
console.log(Math.round(3.67)); //4
console.log(Math.trunc(3.21)); //3
console.log(Math.trunc(-3.21)); //-
