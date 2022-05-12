let swiper = new Swiper(".swiper", {
    slidesPerView: 4.2,
    breakpoints: {
        800: {
            slidesPerView: 3,
        },
        571: {
            slidesPerView: 2,
        },
        100: {
            slidesPerView: 1,
        }
    }
})


let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")
burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
    document.querySelector("body").classList.toggle("lock")

})


let arrow = document.querySelector(".footer__item_block")

arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


window.addEventListener("scroll", function(){
    if (scrollY >= 200) {
        document.querySelector(".header").classList.add("header__active")
    } else {
        document.querySelector(".header").classList.remove("header__active")
    }
})