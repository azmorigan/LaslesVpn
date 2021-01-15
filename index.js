const rightButton = document.querySelector('.reviews__button_line_right')
const leftButton = document.querySelector('.reviews__button_line_left')
leftButton.disable = 'true'
const reviewsContainer = document.querySelector('.reviews__container')



// function shiftRight() {
//   reviewsContainer.style.transform = "translate(-250px)"
//   leftButton.disable = 'false'
// }

function shiftRight(evt) {
  if (evt.target.classList.contains('reviews__button_line_right')) {
    reviewsContainer.style.transform = "translate(-250px)"
    leftButton.disable = 'false'
    document.removeEventListener('click', shiftRight)
  }
  if (evt.target.classList.contains('reviews__button_line_left')) {
    reviewsContainer.style.transform = "translate(250px)"
  }
}

function scrollRight() {
  document.addEventListener('click', shiftRight)
  
}

scrollRight()