let myArray = []
let myArray2 = new Array()
console.log(myArray)
console.log(myArray2)
myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)
console.log(myArray)
console.log(myArray2)
let myName = []
let myName2= new Array()
myName = ["Manuel", "Gutiérrez","manubuilds",22 ,true]
myName2 =new Array ("Manuel"," Gutiérrez","manubuilds",22,true)
console.log(myName)
console.log(myName2)
myName2 = new Array(3)
myName2[2] = "Manuel"
myName2[0] = "Gutiérrez"
myName2[1] = "manubuilds"
console.log(myName2)
//Métodos comunes
myArray =[]
//push y pop
myArray.push("Manuel")
myArray.push("Gutiérrez")
myArray.push("manuelbuidls")
myArray.push("manuel.example@gmail.com")
myArray.push("25")
console.log(myArray)
myArray.pop()
console.log(myArray)
console.log(myArray.pop()) //Elimina el último y lo devuelve
//shift y unshift
myArray.shift()
console.log(myArray)
myArray.unshift ("Manuel")
console.log(myArray)
//lenght
console.log(myArray.length)
//clear(Borrar arrays)
myArray=[]
myArray.lenght = 0 //(alternativa)
console.log(myArray)
//slice
myArray.push("Manuel", "Gutiérrez","manubuilds",22 )
let mynewArray = myArray.slice(1,3)
console.log(myArray)
console.log(mynewArray)

//splice
 myArray.splice(1,3)
 console.log(myArray)
myArray.splice(1,0,3)
console.log(myArray)
