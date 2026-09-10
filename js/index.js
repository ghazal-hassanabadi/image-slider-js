const sliderWrapper = document.querySelector(".sliderWrapper")
const sliderImages = document.querySelectorAll(".sliderImages img")

const next = document.querySelector(".next")
const back = document.querySelector(".back")


const dots = document.querySelectorAll(".dots button")



let currentIndex = 0;


function changeSlide(direction) {
    sliderImages[currentIndex].classList.remove("active")

    currentIndex = currentIndex + direction

    if (currentIndex >= sliderImages.length) {
        currentIndex = 0
    }

    if (currentIndex < 0) {
        currentIndex = sliderImages.length - 1
    }

    sliderImages[currentIndex].classList.add("active")

    resetTimer()
    updateDots()
}


next.addEventListener("click", function() {
    changeSlide(1)
})

back.addEventListener("click", function() {
    changeSlide(-1)
})


let autoSlide = setInterval(function() {
    changeSlide(1)
}, 2000)


function resetTimer() {
    clearInterval(autoSlide)
    autoSlide = setInterval(function() {
        changeSlide(1)
    }, 2000)
}


for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        sliderImages[currentIndex].classList.remove("active")

        currentIndex = Number(dots[i].dataset.index)

        sliderImages[currentIndex].classList.add("active")

        resetTimer()
        updateDots()
    })
}


function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        if (i === currentIndex) {
            dots[i].classList.add("active")
        } else {
            dots[i].classList.remove("active")
        }
    }
}
