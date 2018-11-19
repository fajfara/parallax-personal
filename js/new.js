let parent = document.getElementById('parallax-container');
let children = parent.getElementsByTagName('img');
let sectionAbout = document.getElementById('section-about');

const calculatePos = () => {
    console.log("calculating");
    return (0.04 * window.innerWidth - 101);
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
        // settings for sky
        if(children[i].className === 'layer-0'){
            continue;
        }
        // settings for sun
        if(children[i].className === 'layer-1'){
            children[i].style.transform = 'translateY(-' + (window.pageYOffset * 2 / children.length - 50 + 'px');
        }
        // settings for woods-1
        if(children[i].className === 'layer-2'){
            children[i].style.transform = 'translateY(' + (window.pageYOffset / children.length * 1.5 + 'px');
        }
        // settings for woods-2
        if(children[i].className === 'layer-3'){
            children[i].style.transform = 'translateY(' + (window.pageYOffset / children.length * 1.7 + 'px');
        }
        // settings for woods-3
        if(children[i].className === 'layer-4'){
            children[i].style.transform = 'translateY(' + (window.pageYOffset / children.length * - .00002  + 'px');
        }
        // settings for rocks and trees
        if(children[i].className === 'layer-5'){
            children[i].style.transform = 'translateY(' + (window.pageYOffset / children.length * - .00002  + 'px');
        }
        // settings for clouds
        if(children[i].className === 'layer-6'){
            children[i].style.transform = 'translateY(' + (window.pageYOffset / children.length * 3 + 'px');
        }
    }


}, false);