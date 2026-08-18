//if,else if. else
let age = (37)
if (age==37){console.log("Tienes 37 años")}

//else (si no)
else {console.log("No tienes 37 años")}

//else if (si no ,si)
let edad = (12)
if (edad==37){console.log("Tienes 37 años")}
else if (edad<18){console.log("Eres menor de edad")}
else if (edad>18){console.log("Eres mayor de edad")}
else {console.log("No tienes 37 años")}

//Operador ternario
const message = age==37 ? "La edad es 37":"La edad no es 37"
console.log(message)
//switch
let day = 4
let dayName
switch(day){

case 0: dayName = "Lunes"
break
case 1: dayName = "Martes"
break
case 2: dayName = "Miércoles"
break
case 3: dayName = "Jueves"
break
case 4: dayName = "Viernes"
break
case 5: dayName = "Sábado"
break
case 6 : dayName = "Domingo"
break
default:dayName="Número de día incorrecto"}
console.log(dayName)
