//Operadores

//Operadores aritméticos 
let a = 10 
let b = 5
console.log(a+b) //Suma
console.log(a-b) //Resta
console.log(a*b) //Multiplicación
console.log(a/b) //División
console.log(a**b) //Exponente
console.log(a%b) //Módulo
a++ //Incremento
console.log(a)
b-- //Decremento
console.log(b)
//OPeradores de asignación
let myVariable = 1
console.log(myVariable)
myVariable += 5 //myVariable = myVariable + 5
console.log(myVariable)
myVariable -= 2 //myVariable = myVariable - 2
myVariable *= 1
myVariable /= 2
console.log(myVariable)

//Operadores de comparación

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b) 
console.log(a=a)
console.log(a==11) //igualdad por valor
console.log(a=="11")//igualdad por valor
console.log(a===11) //igualdad por valor y tipo
console.log(a==="11")
console.log(a!=11)
console.log(a!=="11")
console.log(0==false)
console.log(1==false)
console.log(2==false)
console.log(0=="")
console.log(0==" ")
console.log(0==``)
console.log(0==null)
console.log(0==undefined)
console.log(0=="Hola")
console.log(0==="")
console.log(null==undefined)
console.log(null===undefined)
//Truthy values (valores que se consideran verdaderos)
//Todos los números positivos y negativos menos el 0
//Todas las cadenas de texto menos las vacías
// Los booleanos true

//Falsy values (valores que se consideran falsos)
//El número 0
//Cadenas de texto vacías
//0n
//null
//undefined
//Nan
// LOs booleanos flase

//Operadores lógicos
//and (&&)
console.log(5>10 && 15>20)
console.log(5<10 && 15>20)
console.log(5>10 && 15<20)
console.log(5>10 && 15<20 && 35>5)

//or (||)
console.log(5>10 || 15>20)
console.log(5<10 || 15>20)
console.log(5>10 || 15<20)
console.log(5>10 || 15<20 || 35>5)
console.log(5<10 || 15<20 || 35>5)
console.log(5>10 && 15>20 || 30<40)

//not (!)
console.log(!(5>10 && 15>20))
console.log(!(5>10 && 15>20 || 30<40))
console.log(!true)
console.log(!false)
//Operadores ternarios
const isRaining = false
isRaining ? console.log("Lleva paraguas") : console.log("No lleva paraguas")







