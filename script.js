console.log("hello");
// let color=prompt("enter color :");
// document.body.style.background=color
var nav=document.getElementById("navba");
window.onscroll=function(){
    if(document.body.scrollTop<=20){
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    }
    else{
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
}
let myDropdown=document.getElementById("myDropdown");
        function showmenu(){
            myDropdown.classList.add("open-menu");
            myDropdown.classList.remove("close-menu");
        
        }
        function notshow(){
            myDropdown.classList.add("close-menu");
            myDropdown.classList.remove("open-menu");
        }