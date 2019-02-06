alert("I'm working!!");



   
document.getElementById("pressIt").addEventListener("click", function(){
  document.getElementById("GameNew").innerHTML = "Whatever I want!"});

  document.getElementById("pressIt").addEventListener("click", function(){
    document.getElementById("GameNew").innerHTML += "I got it! ";
    document.getElementById("GameNew").innerHTML += "I am it! "
}); 
 



document.getElementById("press")
.addEventListener("click", function(){
    document.getElementById("GameNew").innerHTML += "I did it! ";
    document.getElementById("GameNew").innerHTML += "I will win! "
});

