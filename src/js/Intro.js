
export default class Intro {
    constructor(gsap){
        this.gsap = gsap
        this.button = document.querySelector(".intro-button");
        this.section = document.querySelector(".intro-section");


    }

    palyMusic () {

    }
    
    enter () {
        this.button.addEventListener("click", (e) => {

            this.gsap.to(this.section,{
                opacity:0,
                duration:0.2,
                onComplete: () => {
                    window.location.href = "src/html/aboutGame.html"
                }
            })
        })
    }//enter end
}