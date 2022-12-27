//function for clear button
function clear_sc(){
    document.getElementById("result").innerHTML = "";
}

//function for the display values
function display(x){ 
    document.getElementById("result").innerHTML += x;  
}

//function for backspace
function backspace(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0,-1);
}

//function for the display values   
function calculate(){
    let a = document.getElementById("result").innerHTML;    
    let b = eval(a);
    
    document.getElementById("result").innerHTML = b;
}
