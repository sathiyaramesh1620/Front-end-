let employees=[
{id:101,name:"sathiya",email:"sathiyaanbuselvi@gmail.com"},
{id:102,name:"sathiya",email:"sathiyaanbuselvi@gmail.com"},
{id:103,name:"sathiya",email:"sathiyaanbuselvi@gmail.com"}]

function displayData(){
    let row=""
    for( emp of employees){
        row=row+`<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        
        
        
        </tr>`
        
    }
    document.getElementById("sathiya").innerHTML=row;
}