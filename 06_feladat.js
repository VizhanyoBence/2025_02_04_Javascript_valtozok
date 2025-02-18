let a = prompt('Hogy hívják?')
console.log('Üdvözőllek a programban ' + a + "!")


let b = prompt('Kérem az első oldal hosszúságát: ')
let c = prompt('Kérem az második oldal hosszúságát: ')
console.log(parseFloat(b)*parseFloat(c) + "cm")

let d = prompt('Kérem a kör sugarát: ')
let terulet = Math.PI * d * d;
let kerulet = 2 * Math.PI * d;
console.log('Kör kerülete: ' + kerulet)
console.log('Kör területe: ' + terulet)