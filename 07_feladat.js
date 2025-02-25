console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*10)+100)
console.log(Math.floor(Math.random()*1000)+100)

function dobas_mutat() {
let dobas = Math.ceil(Math.random() * 6) 
document.getElementById("dobas").innerHTML = dobas;
}

function Lotto() {
    let szam_kihuzva = Math.ceil(Math.random() * 90) 
    document.getElementById("kihuzottSzam").innerHTML = szam_kihuzva;
    }

    let number = 5;
    if (number > 0)
    {
        console.log("A szám pozitív!")
    }

    else if (number = 0)
        {
            console.log("A szám nem pozitív és nem is negatív! ")
        }

    else {
        console.log("A szám negatív!")
    }

    let a = prompt("Kérek egy számot: ")

    
    if (a > 0)
    {
        console.log("A szám pozitív!")
    }

    else if (a = 0)
        {
            console.log("A szám nem pozitív és nem is negatív! ")
        }

    else {
        console.log("A szám negatív!")
    }
