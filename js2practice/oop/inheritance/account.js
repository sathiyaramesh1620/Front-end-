class Account{
    min_Bal =500;
    get_Account_details(){
        console.log("Account details are displaying")
    }
}
class Savings_Amount extends Account{
    deposit_Amount(amount){
        console.log(amount+this.min_Bal)
    }
    
}
class Current_Account extends Account{
    min_bal=10000
    deposit_Amount(amount){
        console.log(this.min_bal+amount)
    }
}
let a1 =new Savings_Amount()
a1.get_Account_details()
console.log(a1)
a1.deposit_Amount(2000)

let a2=new Current_Account()
console.log(a2)
a2.get_Account_details()
a2.deposit_Amount(20000)