let span = document.querySelector(".close");
let popUpImg = document.querySelector(".popup-img");
let circle = document.querySelector(".img-icon");
let videoSpan = document.querySelector(".vdo-spn");
let iFrame = document.querySelector("iframe");
let popUpVideo =document.querySelector(".shikbe-video");

circle.addEventListener("click", function(){
    popUpVideo.style.display = "block";
    circle.style.display = "none";
});
videoSpan.addEventListener("click", function(){
    popUpVideo.style.display = "none";
    circle.style.display = "block";
});
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            popUpImg.style.display = "block";
        },
        200
    )
});
span.addEventListener("click", function(){
    popUpImg.style.display = "none";
});