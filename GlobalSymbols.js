console.log("Comparing two symbols created bu Symbol()");
const s1=Symbol("sym1")
const s2=Symbol("sym1")
console.log(s1===s2)
console,log("Comparing two symbols created by Symbol.for()");
const s3=Symbol.for("sym3")
const s4=Symbol.for("sym3")
console.log(s3===s4)