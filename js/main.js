let parent = document.getElementById('parallax-container');
let children = parent.getElementsByTagName('div');
let sectionAbout = document.getElementById('section-about');
let speechBubble = document.getElementById('layer-5');
let topModifier = 83;

const calculatePos = () => {
    console.log("calculating");
    return (0.04 * window.innerWidth - 99);
}

const aboutPositioning = () => {

    sectionAbout.style.top = calculatePos() + 'rem';
};



document.addEventListener("DOMContentLoaded",function(){
    aboutPositioning();
});

window.addEventListener("resize",function(){
    aboutPositioning();
});


window.addEventListener('scroll', () => {
    // Parallax scroll settings
    for(let i = 0; i < children.length; i++) {
        // settings for night sky parallax
        if(children[i].className === 'layer-1'){
            children[i].style.transform = 'translateY(-' + (window.pageYOffset * 2 / children.length + 'px');
            continue;
        }
        // settings for woman sitting parallax
        if(children[i].className === 'layer-2'){
            children[i].style.transform = 'translateY(' + (window.pageYOffset / children.length  + 'px');
            continue;
        }
        // settings for lego stormtrooper parallax
        if(children[i].className === 'layer-3'){
            children[i].style.transform = 'translateY(' + (window.pageYOffset / children.length / 4  + 'px');
            continue;
        }
        // settings for robot parallax
        if(children[i].className === 'layer-4'){
            if(window.pageYOffset > 60){
                continue;
            }
            children[i].style.transform = 'translateY(-' + (window.pageYOffset * i * 2.5 / children.length + 'px');
            continue;
        }
        // settings for message of robot parallax
        if(children[i].className === 'layer-5' || children[i].className === 'layer-5 fadeIn' ){
            if(window.pageYOffset > 60){
                continue;
            }
            children[i].style.transform = 'translateY(-' + (window.pageYOffset * i * 2.5 / children.length + 'px');
            continue;
        }
        // settings for any other layer
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i * 2/ children.length / 10 + 'px');
    } 
    // settings for about section parallax
    sectionAbout.style.transform = 'translateY(-' + (window.pageYOffset * 2 / 10 + 'px');
    
    if (window.pageYOffset > 40){
        speechBubble.classList.add("fadeIn");
    } else {
        speechBubble.classList.remove("fadeIn");
    }


}, false);