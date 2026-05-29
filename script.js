let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};
var typed = new Typed(".text", {
    strings: ["Aspiring Full Stack Developer",

        "Aspiring Frontend Web Developer",
        "Spring Boot Learner"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});
