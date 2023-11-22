var tabLinks= document.getElementsByClassName("tab-links");
var tabContents= document.getElementsByClassName("tab-contents");

function opentab(tabName){
   for(tabLink of tabLinks){
    tabLink.classList.remove("active-link");
   }

   for (tabContent of tabContents){
    tabContent.classList.remove("active-tab");
   }

   event.currentTarget.classList.add("active-link");

   document.getElementById(tabName).classList.add("active-tab");
}

//---------------------------------sidemenu----------------------------------------------//

var sidemen = document.getElementById("sidemenu");

function openmenu(){
   sidemen.style.right = "0";

}

function closemenu(){
   sidemen.style.right = "-200px";
}