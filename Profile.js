function createProfile({name,email})
{
    return {name,email};
}
let user={
    name:"Amrutha",
    age:20,
    email:"amrutha@gmail.com",
    address:"hyderabad"
}
let profile=createProfile(user);
console.log(profile);
