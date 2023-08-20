//header
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click",function(){
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})

//gallery
$(document).ready(function(){
    $('.carousel').carousel();
});

//changing videos and theme
function changeCars(name){
    const bgVideo = document.querySelectorAll(".bg-video");
    const trailers = document.querySelectorAll(".trailer");
    const models = document.querySelectorAll(".subtitle");
    const skins = document.querySelectorAll('.skins');
    const c4 = document.querySelector(".tune");
    const audio = document.querySelector("audio");

    bgVideo.forEach(elem => {
        elem.classList.remove("active")
        if(name === "mclaren-4"){
            c4.muted = false;
            audio.muted = true
        }
        if(elem.classList.contains(name)){
            elem.classList.add("active")
            c4.muted = true;
            audio.muted = false
        }
    });

    trailers.forEach(elem => {
        elem.classList.remove("active")
        if(elem.classList.contains(name)){
            elem.classList.add("active")
        }
    });
    
    models.forEach(elem => {
        elem.classList.remove("active")
        if(elem.classList.contains(name)){
            elem.classList.add("active")
        }
    });

    skins.forEach((style) => {
        if(name === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled","true")
        }
    });
}