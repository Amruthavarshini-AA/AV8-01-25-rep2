let phone="phone"
let address="address"
let obj={
    name:"Raghu",
    [phone]:983214575,
    [address]:"Main 123 st"
}
console.log("Accesssing symbnols from an obj")
console.log(obj[phone])
console.log(obj[address])
let s1=Symbol("abc")
let s2=Symbol("abc")
console.log("Comparing two Symbols")
console.log(s1===s2)
