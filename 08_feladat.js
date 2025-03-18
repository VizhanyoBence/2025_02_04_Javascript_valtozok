//1. Egy beolvasott számról döntse el a program, hogy -30 és 40 között van-e!
let a = prompt("Kérek egy számot: ")
if ( 30 < a & a < 40)
    {
        console.log("A bekért szám 30 és 40 között van!")
    }
else 
{
    console.log("A bekért szám nem 30 és 40 között van")
} 
//2. Két beolvasott szám közül írassuk ki a nagyobbikat! Azt is írassuk ki, ha egyenlők!
let b = prompt("Kérem az első számot: ")
let c = prompt("Kérem a második számot: ")

if( c < b )
    {
        console.log("Az elsőre bekért szám a nagyobb!")
    }
else if (b < c)
    {
        console.log("A másodjára be kért szám nagyobb!")
    }
else
{
    console.log("A két szám egyforma nagyságú!")
}
//3. Egy beolvasott X számnak írjuk ki az előjelét (pozitív, negatív vagy nulla)!
let d = prompt("Kérek egy egész számot: ")
if (d < 0)
    {
        console.log("Ez a szám negatív ennek az előjele: -")
    }
else if(d > 0)
    {
        console.log("Ez a szám pozitív ennek az előjele: +")
    }
else 
{
    console.log("A szám egyenlő nullával.")
}


//4. Kérjünk be egy számot és döntsük el, hogy egész szám-e! Csak ebben az esetben írassuk ki!
let e = prompt("Kérek egy számot:")

if(e % 2 == 0)
    {
        console.log("A szám egész szám")
    }
else
{
    console.log("A szám nem egész szám")
}
//5. A program kérdezzen két számot, s utána írja ki a köztük lévő relációt. Például, ha a két szám 3 és -6.12, akkor az eredmény: 3 > -6.12.
let f = prompt("Kérem az első számot: ")
let g = prompt("Kérem a második számot: ")

if (f > g )
    {
        console.log(f +">"+g)
    }
else if (f < g )
    {
        console.log(f+"<"+g)
    }
else 
{
    console.log("A két szám egyenlő")
}

//6. Írj programot, ami egy életkor alapján eldönti, hogy gyerek (0-6 év), iskolás (7-18), dolgozó (19-60), illetve nyugdíjas-e az illető!

let eletkor = prompt("Kérem az illető életkorát: ")
if(  0 <= eletkor &  eletkor <= 6)
    {
        console.log("Az illető még gyerek!")
    }
else if(7 <= eletkor &  eletkor <= 18)
    {
        console.log("Az illető már iskolás!")
    }
    else if(19 <= eletkor &  eletkor <= 60)
        {
            console.log("Az illető már dolgozó!")
        }
else
{
    console.log("Az ilettő már nyugdíjas!")
}