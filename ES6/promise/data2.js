let employee =[]
let createEmployee = ()=>{
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = true
            employee.push(emp)
            flag?resolve("data inserted successfully"):reject("not Inserted")
        },4000)
    })
}
let getEmployee=()=>{}
createEmployee({}).then((msg)=>{console.log(msg)}).catch((err)=>{ console.log(err)})