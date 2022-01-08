let accsett = document.querySelector('.acc-settings-container');
let accswitch =document.querySelector('.acc-switcher-container');

accsett.addEventListener('click', function() {
    accswitch.classList.toggle('active');
});

let box = document.getElementById('search-box');
let input = document.getElementById('side-input');
let icon = document.getElementById('search-icon');

input.addEventListener('focus', function() {
    box.classList.add('focused');
});
input.addEventListener('blur', function(){
    box.classList.remove('focused');
});

input.addEventListener('focus', function() {
    icon.classList.add('icon-focus');
});
input.addEventListener('blur', function() {
    icon.classList.remove('icon-focus');
});

let comm_cont = document.querySelector('.art-comm');
let comm_icon = document.querySelector('.comm-icon');
let comm_value = document.querySelector('.comm-value');

let rett_cont = document.querySelector('.art-rett');
let rett_icon = document.querySelector('.rett-icon');
let rett_value = document.querySelector('.rett-value');

let like_cont = document.querySelector('.art-like');
let like_icon = document.querySelector('.like-icon');
let like_value = document.querySelector('.like-value');

// comment
comm_cont.addEventListener('mouseenter', function(){
    comm_icon.classList.add('comicohov');
    comm_value.classList.add('comvalhov');
});
comm_cont.addEventListener('mouseleave', function(){
    comm_icon.classList.remove('comicohov');
    comm_value.classList.remove('comvalhov');
});
// retweet
rett_cont.addEventListener('mouseenter', function(){
    rett_icon.classList.add('rtwicohov');
    rett_value.classList.add('rtwvalhov');
});
rett_cont.addEventListener('mouseleave', function(){
    rett_icon.classList.remove('rtwicohov');
    rett_value.classList.remove('rtwvalhov');
});
// like
like_cont.addEventListener('mouseenter', function(){
    like_icon.classList.add('likicohov');
    like_value.classList.add('likvalhov');
});
like_cont.addEventListener('mouseleave', function(){
    like_icon.classList.remove('likicohov');
    like_value.classList.remove('likvalhov');
});

// ------- // ---------

// TRYING TO DISCOVER HOW TO GET MULTIPLE CLASSES WITH SAME NAME IN JS
// CHECK DISCORD