var MenuItems = document.getElementById("MenuItems");
var MenuItems1 = document.getElementById("MenuItems1");

MenuItems.style.maxHeight = "0%";
MenuItems1.style.maxHeight = "0%";

function menutoggle(){
 if(MenuItems.style.maxHeight == "0%"){
    MenuItems.style.maxHeight = "500px";
 }
 else{
    MenuItems.style.maxHeight = "0%";
 }
 
  if(MenuItems1.style.maxHeight == "0%"){
    MenuItems1.style.maxHeight = "100px";
 }
 else{
    MenuItems1.style.maxHeight = "0%";
 }
}