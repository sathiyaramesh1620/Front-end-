class Parent {
    constructor() {
        console.log("Parent Class Constt")
    }
}
class Child extends Parent {
    constructor() {
       super()
        console.log("Child Class Const")
    }
}
console.log(new Child())