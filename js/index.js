const nav = document.querySelector(".nav-links")
const bar = document.querySelector('.d-mobile')
const cl = document.querySelector('.close-mobile')
const times = document.querySelector('.times-mobile')

bar.addEventListener('click',()=>{
    nav.classList.add("is-show")
    document.querySelector('.d-mobile').style.display ='none'
    document.querySelector('.close-mobile').style.display ='block'

})
cl.addEventListener('click',()=>{
    nav.classList.remove("is-show")
    document.querySelector('.d-mobile').style.display ='block'
    document.querySelector('.close-mobile').style.display ='none'
})


// 
window.sr = ScrollReveal();
    sr.reveal('.team-item',{
        duration:1000,
        origin:'bottom',
        distance:'-50px'
    });
    sr.reveal('.header-texts',{
        duration:800,
        delay:1000,
        origin:'top',
        distance:'-100px'
    });
    sr.reveal('.features-item',{
        duration:800,
        origin:'left',
        distance:'-100px'
    });
    sr.reveal('.work-item',{
        literal:200,
        duration:800,
        origin:'right',
        distance:'-400px'
    });
    sr.reveal('.client-img',{
        literal:400,
        duration:800,
        origin:'left',
        distance:'400px'
    });

    sr.reveal('.client-quote',{
        literal:400,
        duration:800,
        origin:'right',
        distance:'400px'
    });
    