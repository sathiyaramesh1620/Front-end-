class Account{
    min_bal =5000;
    id;
    name;
    ename;
    constructor(a,b,c){
        this.id=a;
        this.name=b;
        this.ename=c;
    }
    get_empolyee_details(){
        console.log(this.id)
    }

}
let a1=new Account(101,"sathiya","sathiya@gmail.com",)
let a2=new Account(102,"rockshana","rockshana@gmail.com")
console.log(a1)
a1.get_empolyee_details();
console.log(a2)
a2.get_empolyee_details()