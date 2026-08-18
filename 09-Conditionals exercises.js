// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Manuel"
if (name === "Manuel") {
    console.log(name)
} else {console.log("No es el nombre apropiado")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
let user = "Johan"
let password = "axzbj"
if (user=="Johan" && password =="axzbj") {console.log("Correct")} 
else  {console.log("User or Password is not correct")}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0
if (number ==0) {console.log("El número es 0")}
else if(number<0){console.log("El número es negativo")}
else {console.log("El número es positivo")}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age =15
if (age>=18){console.log("Eres mayor de edad,puedes votar")}
else {
let yearsleft = 18-age 
console.log("No puedes votar te quedan " + yearsleft + " años")}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad = 14
let estado = edad>=18 ? "adulto" : "menor"
console.log(estado)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let months =0
let month
switch(months){
case 0 : month ="January"
break
case 1 : month ="February"
break
case 2 : month ="March"
break
case 3 : month ="April"
break
case 4 : month ="May"
break
case 5 : month ="June"
break
case 6 : month= "July"
break
case 7 : month= "August"
break
case 8 : month= "September"
break
case 9 : month ="October"
break
case 10 : month ="Noviembre"
break
case 11 : month ="Diciembre"
break
default: month= "Ese número de mes no existe"
}
console.log(month)
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch











