// 1. Crea un array que almacene cinco animales
let myArray = []
let animallist = new Array()
animallist =new Array ("Zebra","Elephant","Lion","Tiger","Cat")
console.log(animallist)
// 2. Añade dos más. Uno al principio y otro al final
animallist.push("Dog")
console.log(animallist)
animallist.unshift("Eagle")
console.log(animallist)
// 3. Elimina el que se encuentra en tercera posición
animallist.splice(2,1)
console.log(animallist)
// 4. Crea un set que almacene cinco libros
let mySet = new Set()
let library = new Set(["Atomic Habits", "Thinking Fast and Slow", "The Power of Habit", "Mindset, Grit"])
console.log(library)
// 5. Añade dos más. Uno de ellos repetido
library.add("48 laws of power")
library.add("Atomic Habits")
console.log(library)
let miLibrary = Array.from(library)
miLibrary = ["Atomic Habits", "Thinking Fast and Slow", "The Power of Habit", "Mindset, Grit"]
miLibrary.push("48 laws of power")
miLibrary.push("Atomic Habits")
console.log(miLibrary)
// 6. Elimina uno concreto a tu elección
miLibrary.splice(3,1)
console.log(miLibrary)
// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map ()
myMap=new Map([
[1,"January"],
[2,"February"],
[3,"March"],
[4,"April"],
[5,"May"],
[6,"June"],
[7,"July"],
[8,"August"],
[9,"September"],
[10,"October"],
[11,"November"],
[12,"December"]
])
console.log(myMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (myMap.has(5)){(console.log(myMap.get(5)))}
// 9. Añade al mapa una clave con un array como que almacene los meses de verano
myMap.set("verano",["June","July","August"])
console.log(myMap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
//IA
let Countrylist1 = ["Spain", "France", "Germany", "Portugal", "Italy"]
let myCountrylist1 = new Set(Countrylist1)
let countrylist1 = new Map()
countrylist1.set("paises", myCountrylist1)
console.log(Countrylist1)
console.log(myCountrylist1)
console.log(countrylist1)
//MI código mas tedioso pero funcional
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let MyArray = []
let Countrylist = new Array()
Countrylist = new Array("Spain", "France", "Germany", "Portugal", "Italy")
let myCountrylist = new Set(Countrylist)
let MyCountrylist = new Set(["Spain", "France", "Germany", "Portugal", "Italy"])

let countrylist = new Map([
  ["Country1", "Spain"],
  ["Country2", "France"],
  ["Country3", "Geramny"],
  ["Country4", "Portugal"],
  ["Country5", "Italy"]
])

console.log(Countrylist)
console.log(MyCountrylist)
console.log(countrylist)
