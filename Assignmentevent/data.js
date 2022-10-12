function mouseoverEx(){
    document.getElementById("abc").style.backgroundColor="blue"
}
function mouseoutEx(){
    document.getElementById("def").style.backgroundColor="yellow"
}
function clickEx(){
    document.getElementById("ghi").style.backgroundColor="green"

}
function dbclickEx(){
    document.getElementById("sss").style.backgroundColor="orange"

}
function focusEx(){
    document.getElementById("mno").style.backgroundColor="pink"
}
function blurEx(){
    let tag_Ref=document.getElementById("ppp")
   // console.log(tag_Ref.value)

    document.getElementById("ppp").value =tag_Ref.value.toUpperCase()
}