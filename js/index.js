
var hamburgerIcon = document.getElementById("hamburgerIcon");
var navItems = document.getElementById("navItems");
var hamburgerControl = false;


function showMenu(){
   if (!hamburgerControl){
      hamburgerIcon.firstElementChild.className = "fa-solid fa-times";
      navItems.style.width = "100%";
      hamburgerControl = true;
   }else{
      hamburgerIcon.firstElementChild.className = "fa-solid fa-bars";
      navItems.style.width = "0%";
      hamburgerControl = false;
   }
}


var firstComment = document.getElementById("firstComment");

// firstComment.style.marginLeft = "-50px";

function move(){

}
