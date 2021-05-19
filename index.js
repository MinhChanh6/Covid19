
//******** Active-link menu********// 

const sections = document.querySelectorAll('section[id]')
const navLink = document.querySelectorAll('.header-menu li')
console.log(navLink)
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        if(scrollY >= (sectionTop - sectionHeight/5)){
            sectionId = section.getAttribute('id')
        }
    })
    navLink.forEach(li => {
        li.classList.remove('active-link')
        if(li.classList.contains(sectionId)){
            li.classList.add('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//********Change Background Menu ********// 

function changeBackground (){
    const nav = document.getElementById('header');
    if(this.pageYOffset >= 200 ){
        nav.classList.add('scroll-header')
    }
    else{
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', changeBackground)

//******** Animations ********// 
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text",{y: "0%", duration: 1, stagger: 0.5});
tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1  }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".content", { opacity: 0 }, { opacity: 1, duration: 1 });


//******** Smooth-Sroll ********// 
const scroll = new SmoothScroll('.nav a[href*="#"]',{
    speed: 650
});
//******** Sroll-Reveal ********// 
const str = ScrollReveal(
    {
        distance: '60px',
        duration: 2800,
        reset:true,
    }
);

str.reveal(`.content-image`,{
    origin:'top',
})

str.reveal(`.content-right .content-title`,{
    delay: 300,
})

str.reveal(`.content-right .content-titletwo`,{
    delay: 500,
})

str.reveal(`.content-right .content-desc`,{
    origin:'top',
    interval:1400,
})

str.reveal(`.button-opacity`,{
    origin:'top',
    interval:1350,
})


str.reveal(`.box-items`,{
    origin:'top',
    interval: 200,
})
str.reveal(`.heading-symotomps`,{
    origin:'top',
})

str.reveal(`.todo-text`,{
    origin:'right',
    interval: 500,
})

str.reveal(`.todo-img`,{
    origin:'left',
    interval: 500,
})

str.reveal(`.footer-coppy, .footer-content, .question`,{
    origin:'bottom',
    interval: 200,
})



