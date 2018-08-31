var moment = require("moment")

console.log(moment().add(7, "hours"))

console.log(moment().subtract(1, "years"))

console.log(moment().format('[Hoje é] DD [de] MMMM'))

console.log(moment("2018-09-12").isAfter("2017-01-31")) // true

console.log(moment("2017-10-15"))