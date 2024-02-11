import fs from "fs/promises"

//We can directly use await without creating an async func bcuz we are inside a module
let a = await fs.readFile("dev.txt")

// let b = await fs.writeFile("dev.txt","\n\nGood Job")

let c = await fs.appendFile("dev.txt","\n\nGood Job")

console.log(a.toString(),c)