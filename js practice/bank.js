class Address {
    constructor(hno, hname, hcity, hstate) {
        console.log("address class constructer")
        this.no = hno;
        this.street = hname;
        this.city = hcity;

        this.state = hstate;
    }
    update_address() { }
}
class Savings_Account {
    constructor(id, name, amount, Address) {
        console.log("savings class constructor")
        this.eid = id;
        this.ename = name;
        this.eamount = amount;
        this.Address=Address;
    }
}
let c1 = new Savings_Account(101, "anbuselvi", 1000, new Address(96, "palur", "kumbakonam", "tamilnadu"))

console.log(c1)