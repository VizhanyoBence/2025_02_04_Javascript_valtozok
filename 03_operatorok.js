console.log(5 == "5"); // true
console.log(typeof(5) ); 
console.log(typeof("5") ); 

console.log(5 === "5"); // true
console.log(5 === 5); // true
console.log(5 !== 5); // true
console.log(5 !== "5"); // true

let a = "6";
console.log(`a: ${a}`)
console.log(!(a < 5))

console.log("Logikai Operátor")
console.log(a > 5 && a < 20 )
console.log("Check type")
console.log(a > 5 typeof a === "number")
console.log( a== 3 || a == 6)

let z;
z= 3+4;
console.log(z)
z= 3-4;
console.log(z)
z= 2*3;
console.log(z)
z= 2/3;
console.log(z)
z= 3%2, // modulo 
console.log(z)
z= 3**2; // hatvány képzés
console.log(z)


let x,y;
x = 54;
console.log("Preinkrement")
console.log(`x=${x}, y=${y}`)
y=++x

x = 5;
y=x++
console.log("Postinkrement")
console.log(`x=${x}, y =${y}`)



let x,y;
x = 54;
console.log("Preinkrement")
console.log(`x=${x}, y=${y}`)
y=--x

x = 5;
y=x--
console.log("Postinkrement")
console.log(`x=${x}, y =${y}`)

console.log('Addig jár  a korsó a kútra'+ 'amíg el nem törik')
let kocka = 'kocka';
kocka += 'has' 
console.log(kocka)

//kapcsolati operátorok: 
const gyumolcs = {fa: 'alma' , fajta: 'Starking', szin:'piros'}
console.log('fajtak' in gyumolcs);
console.log(gyumolcs instanceof Object);

function myFunction() 
{
let valtozo = 5;
let valtozo2 = 20;
return "valtozo"
}

console.log(myFunction())
console.log(valtozo2)