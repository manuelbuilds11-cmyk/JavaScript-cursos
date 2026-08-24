//Map

//Declaración

let myMap = new Map ()
console.log(myMap)

//Inicialización
myMap = new Map([
["name","Manuel"],
["name2","Johan"],
["email", "manuel.example@gmail.com"],
["age",22]
])
console.log(myMap)

//Métodos y propiedades

//set
myMap.set("alias","Johan")
myMap.set("name","Manuel Gutiérrez")
console.log(myMap)

//get
console.log(myMap.get("name2"))
console.log(myMap.get("surname"))

//has
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//delete
myMap.delete("email")
console.log(myMap)
//keys y values
console.log(myMap.keys())
console.log(myMap.values())
//Size
console.log(myMap.size)
//clear
myMap.clear()
console.log(myMap)

