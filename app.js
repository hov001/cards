const slides = document.querySelectorAll('.slide')

// Click event
slides.forEach((slide) => {
  slide.addEventListener('click', (event) => {
    clearActiveClasses()

    event.target.classList.add('active')
  })
})

// Remove active classes
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}
