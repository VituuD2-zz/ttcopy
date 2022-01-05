let input = document.getElementById('side-input')
let box = document.getElementById('search-box')
let icon = document.getElementById('search-icon')

input.addEventListener('focus', function() {
    box.classList.add('focused');
})
input.addEventListener('blur', function(){
    box.classList.remove('focused')
})

input.addEventListener('focus', function() {
    icon.classList.add('icon-focus')
})
input.addEventListener('blur', function() {
    icon.classList.remove('icon-focus')
})