class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created.");
  }
  eats() {
    console.log("Eating");
  }
  jump() {
    console.log("Jumping");
  }
}
class Lion extends Animal {
  //if we extend a class and did some extra thing to the new class constructor we have to use "super" keyword to access "this." else it thorws an error

  //It executes it parent class code as well as its own code

  constructor(name) {
    super(name);
    this.name = name;
    console.log("Object is created... and It's a lion");
  }

  //super() keyword--> When we overide a method and we dont want the method of the previoud class go in vain, we can execute it using super keyword.

  eats() {
    super.eats(); //will execute parent class eats() method
    console.log("Eating and roar");  //Method override
  }
  jump() {
    console.log("Jumping");
  }
}
let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);
