
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