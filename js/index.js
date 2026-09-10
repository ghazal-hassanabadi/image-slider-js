const sliderWrapper = document.querySelector(".sliderWrapper")
const sliderImages = document.querySelectorAll(".sliderImages img")

const next = document.querySelector(".next")
const back = document.querySelector(".back")

let currentIndex = 0;


function showNext() {
        sliderImages[currentIndex].classList.remove("active")
        currentIndex++

        if(currentIndex === sliderImages.length) {

            currentIndex=0

        }
        
        sliderImages[currentIndex].classList.add("active")

        resetTimer()

}


next.addEventListener("click" , showNext)

function showBack(){
        sliderImages[currentIndex].classList.remove("active")
        currentIndex--

                if(currentIndex <0) {

            currentIndex=sliderImages.length - 1

        }

          sliderImages[currentIndex].classList.add("active")

          resetTimer()
}

back.addEventListener("click" , showBack)

let autoSlide = setInterval(showNext, 2000)


function resetTimer () {
    clearInterval(autoSlide)
    autoSlide = setInterval(showNext, 2000)
}

