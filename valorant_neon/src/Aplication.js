export function unhiden() {
    var element = document.getElementById('menu')  
    
    if(element.style.left == '0px'){
        element.style = "left: -100% !important; opacity: 0 !important;"
    } else {
        element.style = "left: 0 !important; opacity: 1 !important;"
    }
} 
export function search() {
    
    if(document.getElementById("textarea").style.marginLeft == null)    
        document.getElementById("textarea").style.marginLeft = "-256px" 
    else
        document.getElementById("textarea").style.marginLeft = "0px" 
  }