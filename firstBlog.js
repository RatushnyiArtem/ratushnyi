let messages = document.querySelector('.m-message')
let email = document.querySelector('.slider-photo')
let crossout = document.getElementById('cross3')

email.addEventListener('click', function() {
    messages.classList.add('open');
    messages.classList.add('email');
  
  })
  crossout.addEventListener('click', function() {
    messages.classList.remove('open');
    messages.classList.remove('email');
  })
  

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      messages.classList.remove('open')
      messages.classList.remove('email')
    }
  })
  