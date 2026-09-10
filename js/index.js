const sliderWrapper = document.querySelector(".sliderWrapper")
const sliderImages = document.querySelectorAll(".sliderImages img")

const next = document.querySelector(".next")
const back = document.querySelector(".back")

let currentIndex = 0;



next.addEventListener("click" , 
    function(){
        sliderImages[currentIndex].classList.remove("active")
        currentIndex++

        if(currentIndex === sliderImages.length) {

            currentIndex=0

        }
        
        sliderImages[currentIndex].classList.add("active")

    }
)

back.addEventListener("click" , 
    function(){
        sliderImages[currentIndex].classList.remove("active")
        currentIndex--

                if(currentIndex <0) {

            currentIndex=sliderImages.length - 1

        }

          sliderImages[currentIndex].classList.add("active")

    }
)