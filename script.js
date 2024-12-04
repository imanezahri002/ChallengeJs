//cha1+2
let corps=document.getElementsByClassName("fils1")[0];

corps.addEventListener("click",function(){
    corps.style.backgroundColor="pink";
});

function message(){
    btn_un=document.getElementById("btn1");
    alert("Hello I'm IMANE 🥰");
}
//cha3
let cor=document.getElementsByClassName("container2")[0];
cor.addEventListener("mousemove",function(event){
let aff=document.getElementById("pos");
aff.textContent=`la position du souris x= ${event.clientX} y= ${event.clientY}`;
})
//cha4 && cha5
let modale=document.getElementsByClassName("modal")[0];
let cpt=0;
function reagir(){
    modale.style.display="block";
    cpt++;
    console.log(cpt);
}
let ferme=document.getElementById("close");
ferme.addEventListener("click",function(){
    modale.style.display="none";
})
//cha6
let msg=document.getElementById("vis");
let butun=document.getElementById("btn3");
function cacher(){
    
    msg.style.display="none";
    
    butun.textContent="montrer";
    butun.setAttribute("onclick","montrer()");
}
function montrer(){
    msg.style.display="block";
    butun.textContent="cacher";
    butun.setAttribute("onclick","cacher()");
}
//cha7
let title=document.getElementById("titre");
title.addEventListener("mouseover",function(){
        title.textContent="obligatoire";
});
//cha8-9
let inputs=document.querySelectorAll("input");

function validate(){
let nom =inputs[0].value;
if(nom.length<5){
    alert("il faut que le nom devra avoir 5 caractere minimum");
}
inputs[2].setAttribute("class","email");
}




