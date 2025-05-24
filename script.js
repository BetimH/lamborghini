function openFunction(){
    document.getElementById("aside").style.width = "250px";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.8)";  
    document.getElementById("text").style.color = "gray";  
}
function closeFunction(){
    document.getElementById("aside").style.width = "0px";
       document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)"; 
       document.getElementById("text").style.color = "white";  
}