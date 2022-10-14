let goToMovie=(success,failure)=>{
    let amount = 1000

amount>500?success("go and enjoy"):failure("go to sleep")
}
goToMovie((msg)=>{console.log(msg)},(err)=>{console.log(err)})