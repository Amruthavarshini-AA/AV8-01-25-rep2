function createProfile(){
    var {name,age}=obj;
    var[a,b]=obj.arr;
    return{name:name,age:age,primaryInterest:a,secondaryInterest:b};
}
let obj={
    name:"Parchi",
    age:25,
    arr:["Reading","Travelling","Playing"]
}
console.log(createProfile(obj))