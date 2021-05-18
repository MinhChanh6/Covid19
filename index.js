
//********Active-link menu********// 

const sections = document.querySelectorAll('section[id]')
const navLink = document.querySelectorAll('.header-menu li')
console.log(navLink)
function scrollActive(){
    const scrollY = window.pageYOffset
    console.log(scrollY)
    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        if(scrollY >= (sectionTop - sectionHeight/3)){
            sectionId = section.getAttribute('id')
        }
        console.log(sectionId)
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
const tl1 = gsap.timeline ({
    srcollTrigger: {
        trigger: '.todo',
        start: 'center bottom',
        pin: 'true'
    }
});
tl1.from(".todo-img", {x: 200, opacity: 0 , duration:1.5})
    .from(".todo-text",{y: 300, opacity:0 , duration: 1}, "=-1");
tl.to(".text", { y: "0%", duration: 1.3, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1.5 }, "-=1.5");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".content", { opacity: 0 }, { opacity: 1, duration: 1 });


//******** Smooth-Sroll ********// 
// var scroll = new SmoothScroll('.nav a[href*="#"]',{
//     speed: 700
// });

var scroll = new SmoothScroll('.nav a[href*="#"]', {
	// Function. Custom easing pattern
	// If this is set to anything other than null, will override the easing option above
	customEasing: function (time) {

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	}
});