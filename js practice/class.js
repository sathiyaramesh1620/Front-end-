class Address{
    constructor(hno,sname,city,state){
        console.log("Address class constructor")
        this.hno=hno;
        this.sname=sname;
        this.city=city;
        this.state=state;

    }
    
    update_address(){}
}
class Savings_Account{
    constructor(id,name,amo,Address){
        console.log("savings class constructor")
        this.id=id;
        this.ename=name;
        this.amount=amo;
        this.Address=Address;
    }


}


let c1 = new Savings_Account(101,"sathiys",1000,new Address(96,"palur","kumbakonam","tamilnadu"))
console.log(c1)
module.exports = Address