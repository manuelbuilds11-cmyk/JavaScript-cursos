let mySet = new Set()
mySet= new Set (["Manuel", "Gutiérrez","manubuilds",22 ,true])
console.log(mySet)
//Métodos comúnes
//add y delete
mySet.add("Johan")
console.log(mySet)
mySet.delete(true)
console.log(mySet)
console.log(mySet.delete("Gutiérrez"))
console.log(mySet)
console.log(mySet.delete("Pepe"))
console.log(mySet)
//has
console.log(mySet.has("Johan"))
console.log(mySet.has("Manuel"))
//Size
console.log(mySet.size)

//CONVERTIR SET EN ARRAY!!
let myArray = Array.from(mySet)
console.log(myArray)
//Convertir array en set
mySet= new Set (myArray)
console.log(myArray)

//Set no admite duplicados!
mySet.add("Johan")
mySet.add("Johan")
mySet.add("Johan")
console.log(mySet)
