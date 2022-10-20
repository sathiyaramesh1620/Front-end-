class Account{
    constructor(id,name){
        this.eid=id;
        this.ename=name;

    }

}
class Savings_Account extends Account{
    constructor(id,name,gmail,amount){
        super(id,name)
        this.egmail=gmail;
        this.eamount=amount;

    }
}
let a1=new Savings_Account(101,"sathiya","sathiya@gmail.com",5000)
let a2=new Savings_Account(103,"anbuselvi","rockshana@gmail.com",2000)
console.log(a1)
console.log(a2)