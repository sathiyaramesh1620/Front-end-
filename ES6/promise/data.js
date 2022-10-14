let employee =[
    {id:102,name:"sathiya",salary:40000},
    {id:103,name:"rockshana",salary:5000}]
    let createEmployee=(emp)=>{
        console.log("test case 123")
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let flag =true
        employee.push(emp)
        flag?resolve("data inserted successfully"):reject("not inserted")
    },4000)
})
    }
    let  getEmployee=()=>{
        setTimeout(()=>{
            let rows=""
            for(emp of employee){
                rows = rows +`<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.salary}</td>
                </tr>`

            }
            document.getElementById("promise").innerHTML = rows
        },1000)
    }
    createEmployee({id:203,name:"harish",salary:90000}).then((result) => {
       console.log(result) ;
       getEmployee()
    }).catch((err) => {
        console.log(err)
    });