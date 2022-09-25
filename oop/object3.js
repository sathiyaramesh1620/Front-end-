class Emp {
    constructor(name, sal, loc){
        this.name = name;
        this.sal = sal;
        this.loc = loc; 
        console.log("constructor executing automaticalay")
    }

}
let e1 = new Emp("sathiya", 45000, "bangalore")
console.log(e1)

let e2 = new Emp("anbu",40000, "chennai")
console.log(e2)
let e3 = new Emp("kishore", 70000, "chennai")
console.log(e3)
let e4 = new Emp("pandi",70000,"chennai")
console.log(e4)