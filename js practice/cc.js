const Address = require('./class.js')
class Credit_card{
    constructor(id,ename,eaddress){
        this.id = id;
        this.name = ename;
        this.address = eaddress;

    }
}
let cc1 = new Credit_card('101',"sathiya", new Address(96,"medras","bangalore","karnadaka"))
console.log(cc1)