function mouseoverEx(){
    document.getElementById("abc").style.backgroundColor="blue"
}
function mouseoutEx(){
    document.getElementById("def").style.backgroundColor="yellow"
}
function clickEx(){
    document.getElementById("hij").style.backgroundColor="black"
}
function dbclickEx(){
    document.getElementById("abv").style.backgroundColor="orange"
}
function focusEx(){
document.getElementById("srm").style.backgroundColor="pink"
}

function blurEx() {
    let tag_Ref = document.getElementById("klm")
    //console.log(tag_Ref.value)
    document.getElementById("klm").value = tag_Ref.value.toLowerCase()
}