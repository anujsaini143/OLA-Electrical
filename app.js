var bars=document.querySelector("#bars");
bars.addEventListener(
    "click",
    function (){
        var menubarr=document.querySelector(".header-menu");
        menubarr.style.transform="scale(1)"
    }
)
var wrong=document.querySelector("#wrong");
wrong.addEventListener(
    "click",
    function (){
        var menubarr=document.querySelector(".header-menu");
        menubarr.style.transform="scale(0)"
    }
)

var bars1=document.querySelector("#bars1");
bars1.addEventListener(
    "click",
    function (){
        var menubarr1=document.querySelector(".name");
        menubarr1.style.transform="scale(1)"
    }
)

var wrong1=document.querySelector("#wrong1");
wrong1.addEventListener(
    "click",
    function (){
        var menubarr1=document.querySelector(".name");
        menubarr1.style.transform="scale(0)"
    }
)



var title=document.querySelectorAll(".title");
title.forEach(
    function (elem){
        elem.addEventListener(
            "click",
            function(e){
                var currentopen=document.querySelector(".open");
                var currentopencontent=document.querySelector(".show_contents");
                if (currentopen!=null&& currentopencontent!=null) {
                    currentopen.classList.remove("open");
                    currentopencontent.classList.remove("show_contents");
                    currentopencontent.style.height="0"
                } 
                if (currentopen==e.target) {
                    return;
                }
                e.target.classList.add("open");
                var nextelement=e.target.nextElementSibling;
                if (nextelement.classList.contains("show_contents")==true) {
                    nextelement.style.height="0"
                }
                else{
                    nextelement.style.height=(nextelement.scrollHeight+10)+"px";
                }
                nextelement.classList.add("show_contents");
            }
        )
    }
)
var incbtn=document.getElementById("rbtn");
var decbtn=document.getElementById("lbtn");
var main=document.querySelectorAll(".main-slider .main-slider-one");
demo=0;
function prev(){
    demo++;
    for(var i=0;i<main.length;i++){
        main[i].style.transform=`translateX(-${100*demo}%)`
    }
}
function next(){
    demo--;
    for(i=0;i<main.length;i++){
        main[i].style.transform=`translateX(-${100*demo})`
    }
}


function greett(){
   var menuu=document.getElementsByClassName("ind-img");
    var counts=menuu[0].innerHTML;
    menuu[0].innerHTML=menuu[menuu.length-1].innerHTML;
    for(i=menuu.length-1;i>=1;i--){
        if (i==1) {
            menuu[1].innerHTML=counts;
        } 
        else{
            menuu[i].innerHTML=menuu[i-1].innerHTML
        }
    }
}

function greet(){
    var boxess=document.getElementsByClassName("ind-img1");
    var count=boxess[0].innerHTML;
    boxess[0].innerHTML=boxess[boxess.length-1].innerHTML;
    for(i=boxess.length-1;i>=1;i--){
        if (i==1) {
            boxess[1].innerHTML=count;
        }
        else{
            boxess[i].innerHTML=boxess[i-1].innerHTML
        }
    }
}

function greettt(){
    var box=document.getElementsByClassName("ind-img2");
    var counter=box[0].innerHTML;
    box[0].innerHTML=box[box.length-1].innerHTML;
    for(i=box.length-1;i>=1;i--){
        if (i==1) {
            box[1].innerHTML=counter;
        }
        else{
            box[i].innerHTML=box[i-1].innerHTML
        }
    }
}


function greetttt(){
    var heading=document.getElementsByClassName("ind-img3");
    var item=heading[0].innerHTML;
    heading[0].innerHTML=heading[heading.length-1].innerHTML;
    for(i=heading.length-1;i>=1;i--){
        if (i==1) {
            heading[1].innerHTML=item;
        }
        else{
            heading[i].innerHTML=heading[i-1].innerHTML
        }
    }
}

function opac(){
    var footertopright=document.querySelector(".footer-top-right");
    var footertopright1=document.querySelector(".footer-top-right1")
    var footertopright2=document.querySelector(".footer-top-right2")
    var footertopright3=document.querySelector(".footer-top-right3")
    footertopright.style.display="none"
     footertopright1.style.display="block"
     footertopright2.style.display="none"
     footertopright3.style.display="none"
}
function opac1(){
    var footertopright=document.querySelector(".footer-top-right");
    var footertopright1=document.querySelector(".footer-top-right1")
    var footertopright2=document.querySelector(".footer-top-right2")
    var footertopright3=document.querySelector(".footer-top-right3")
    footertopright.style.display="block"
     footertopright1.style.display="none"
     footertopright2.style.display="none"
     footertopright3.style.display="none"
}
function opac2(){
    var footertopright=document.querySelector(".footer-top-right");
    var footertopright1=document.querySelector(".footer-top-right1")
    var footertopright2=document.querySelector(".footer-top-right2")
    var footertopright3=document.querySelector(".footer-top-right3")
    footertopright.style.display="none"
     footertopright1.style.display="none"
     footertopright2.style.display="block"
     footertopright3.style.display="none"
}
function opac3(){
    var footertopright=document.querySelector(".footer-top-right");
    var footertopright1=document.querySelector(".footer-top-right1")
    var footertopright2=document.querySelector(".footer-top-right2")
    var footertopright3=document.querySelector(".footer-top-right3")
    footertopright.style.display="none"
     footertopright1.style.display="none"
     footertopright2.style.display="none"
     footertopright3.style.display="block"
}