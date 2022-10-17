//class is a template to construct object
class Account{
    min_Bal=5000;
    open_Account(){
        console.log("Account Opened successfully")
    }
    deposit_Account(){
        console.log("deposit sucessfully")
    }
    get_statement(){
        console.log("Printer is not working")
    }
    get_Balance(){
        console.log("server is busy")
    }
    withdrawl_Amount(){
        console.log("Insufficient Balance")
    }

}
let a1=new Account()

console.log(a1)
console.log(a1.min_Bal)
a1.open_Account
a1.deposit_Account()
a1.get_statement()
a1.get_Balance()
a1.withdrawl_Amount()

