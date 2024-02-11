import {a,b} from "./export.js"
console.log(a,b)

import obj from "./export.js"
console.log(obj)

import devV from "./export.js"
console.log(devV)

//Line 4,5 and 7,8 are shows same output because the default export was used in these; (variable names can be different but output is same in default export)

//commonJS:
// const r = require("./require.js")