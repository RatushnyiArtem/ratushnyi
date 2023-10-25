let setting = document.getElementById('setting')
let splash = document.querySelector('.menu-splash')
let body = document.querySelector('body')
let cross = document.getElementById('cross')
setting.addEventListener('click', splasher)
function splasher(){
  splash.classList.add('open')
}
cross.addEventListener('click', cancel)
function cancel(){
  splash.classList.remove('open')
}
