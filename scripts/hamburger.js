let hamburdger = document.querySelector(".hamburger");
let hamClicked = false;
let dropdown = document.querySelector(".dropdown");


hamburdger.addEventListener("click", function(){
    if (!hamClicked){
        //code working
        dropdown.style.display = "flex";
        hamClicked = true;
    }
    else{
        // code finished working
        dropdown.style.display = "none";
        hamClicked = false;
    }
});