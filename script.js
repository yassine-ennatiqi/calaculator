screen = document.getElementById("screen")
function append(input){
    screen.value += input
}
function cleear(){
    screen.value = ""
}
function equal(){
     
    try{
        if (screen.value == ""){
            screen.value = 0
        }
        screen.value = eval(screen.value)
    }
    catch{
        screen.value = "ERROR"   
    }
    
}