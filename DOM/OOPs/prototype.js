//prototype adds/inherit some functions to an obj

let animal = {
    eats:true
}
let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal; //Its sets rabbit's prototyp(eat func)

console.log(rabbit.eats)