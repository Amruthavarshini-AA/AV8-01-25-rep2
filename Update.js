let employee={
    name:"Afroz",
    role:"Developer",
    age:28,
    location:"Hyd"
}

updateEmployee(employee,"Senior Developer")
function updateEmployee(employee,a)
{
    let obj={
        ...employee,
        role:a
    }
    //console.log(obj,employee);
    
    console.log(obj);
}