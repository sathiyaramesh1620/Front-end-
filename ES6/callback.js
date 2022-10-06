let employee =[
    {id:101, name:"sathiya",salary:50000},
    {id:102, name:"rockshana",salary:60000},
]
let create_employee= (emp,callback)=>{
setTimeout(()=>{
    employee.push(emp)
    callback()
},2000)
}



let get_employee=()=>{
setTimeout(()=>{
    let row=""
    employee.map(emp=>{
        row=row+`<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.salary}</td>
        </tr>`
    });
    document.getElementById("rockshana").innerHTML=row

},1000)

}


create_employee({id:101,name:"anbu",salary:9000},get_employee)

