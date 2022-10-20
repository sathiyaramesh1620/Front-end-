class Account {
    min_Bal = 5000;
    Amount;
    open_Account() {
        console.log("open account success")

    }
    deposit_Amount(a){
        this.Amount = a
        console.log(a)
    }
    get_bal(){
        return this.min_Bal+this.Amount
    }


}
let a1=new Account()
a1.open_Account()
a1.deposit_Amount(100)
 
 