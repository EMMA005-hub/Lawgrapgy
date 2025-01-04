var tablinks =document.getElementsByClassName("tab-links");
    var tabcontents =document.getElementsByClassName("tab-contents");
    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-links");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-links");
      document.getElementById(tabname).classList.add("active-tab");
      
    };
    
    var side = document.getElementById("sidemenu");
    function openmenu(){
      side.style.right='0';
    }
    function closemenu() {
      side.style.right='-200px';
    };
    
    
    document.getElementById("loadmore").onclick = function() {
    var moreServices = document.querySelectorAll("#more");
    for (var i = 0; i < moreServices.length; i++) {
        moreServices[i].style.display = "block"; // Show the hidden services
    }
    this.style.display = "none"; // Hide the "See more" button after clicking
};

document.getElementById("load").onclick =
function() {
  var work = document.querySelectorAll("#mor");
  for (var i = 0; i < work.length; i++) {
    work[i].style.display ="block";
  }
  this.style.display="none";
}
