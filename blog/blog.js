(function(){
// hide/show list of posts
function collapseList(){
  document.getElementById("list2019").classList.toggle("hidden"); // hides/shows ul list
    
 // change the arrow right/down
   if ( this.children[0].classList.contains('fa-caret-down')){
    this.innerHTML = '<i class="fas fa-caret-right" id="arrowRight"></i>';
  }
  else if ( this.children[0].classList.contains('fa-caret-right')){
    this.innerHTML = '<i class="fas fa-caret-down" id="arrowDown"></i>';
  }
}
    
let arrow = document.getElementById("arrow");
if (typeof(arrow) != 'undefined' && arrow != null){
    arrow.addEventListener("click", collapseList);
}
    
//collapse / show menu responsive

let collapseButton = document.getElementById("collapse-button");
let navbarSmall = document.getElementById("navbar-nav-small");
let closeMenu = document.getElementById("close-menu");

collapseButton.onclick = function (){
    navbarSmall.style.display = "block";    
};
closeMenu.onclick = function(){
    navbarSmall.style.display = "none";
};


  
 
}())