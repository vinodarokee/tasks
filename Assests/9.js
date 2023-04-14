const menuToggle=document.querySelector("#Background .toggle")
const showCase=document.querySelector("#Background .showcase")

menuToggle.addEventListener('click',() => {
    menuToggle.classList.toggle("active")
    showCase.classList.toggle("active")
});

const btn=document.querySelector("#Background .switch-btn")
const video=document.querySelector("#Background .video-container")

btn.addEventListener('click',function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add('slide');
        video.pause();
    }
    else{
    btn.classList.remove('slide');
    video.play();
    }
})