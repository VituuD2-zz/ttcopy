// POP UP ANIMATION
let accsett = document.querySelector('.acc-settings-container');
let accswitch = document.querySelector('.acc-switcher-container');

accsett.addEventListener('click', function() {
	accswitch.classList.toggle('active');
});

// TWEET BOX EFFECT
let upbox = document.querySelector('#updatebox');
let ttbtn = document.querySelector('.ttup-tweetbtn');

upbox.addEventListener('focus', function (){
    ttbtn.classList.add('ttbtn');
});
upbox.addEventListener('blur', function (){
    ttbtn.classList.remove('ttbtn');
});

// TWEET BOX CHECKER
function get(){
    var issfocus = (document.activeElement === upbox);

    if (upbox && upbox.value){
        var  ttmsg = document.querySelector('#updatebox').value;
        alert(`${ttmsg}\nEsse recurso ainda não está completo, volte depois..😃`);
        document.querySelector('#updatebox').value = ''; 
    }
}


// SEARCH BOX EFFECT
let box = document.getElementById('search-box');
let input = document.getElementById('side-input');
let icon = document.getElementById('search-icon');

input.addEventListener('focus', function (){
    box.classList.add('focused');
});
input.addEventListener('blur', function (){
    box.classList.remove('focused');
});

input.addEventListener('focus', function (){
    icon.classList.add('icon-focus');
});
input.addEventListener('blur', function (){
    icon.classList.remove('icon-focus');
});

// REACTIONS STYLE
let comm_cont = document.querySelectorAll('.art-comm');
let comm_icon = document.querySelectorAll('.comm-icon');
let comm_value = document.querySelectorAll('.comm-value');

let rett_cont = document.querySelectorAll('.art-rett');
let rett_icon = document.querySelectorAll('.rett-icon');
let rett_value = document.querySelectorAll('.rett-value');

let like_cont = document.querySelectorAll('.art-like');
let like_icon = document.querySelectorAll('.like-icon');
let like_value = document.querySelectorAll('.like-value');

// comment reaction
for (let i = 0; i < comm_cont.length; i++){
    comm_cont[i].addEventListener('mouseenter', function (){
        comm_icon[i].classList.add('comicohov');
        comm_value[i].classList.add('comvalhov');
    });
    comm_cont[i].addEventListener('mouseleave', function (){
        comm_icon[i].classList.remove('comicohov');
        comm_value[i].classList.remove('comvalhov');
    });
}

// retweet
for (let i = 0; i < rett_cont.length; i++){
    rett_cont[i].addEventListener('mouseenter', function (){
        rett_icon[i].classList.add('rtwicohov');
        rett_value[i].classList.add('rtwvalhov');
    });
    rett_cont[i].addEventListener('mouseleave', function (){
        rett_icon[i].classList.remove('rtwicohov');
        rett_value[i].classList.remove('rtwvalhov');
    });
}

// like
for (let i = 0; i < like_cont.length; i++){
    like_cont[i].addEventListener('mouseenter', function (){
        like_icon[i].classList.add('likicohov');
        like_value[i].classList.add('likvalhov');
    });
    like_cont[i].addEventListener('mouseleave', function (){
        like_icon[i].classList.remove('likicohov');
        like_value[i].classList.remove('likvalhov');
    });
}

// Like Count
let like_i = document.querySelectorAll('.fa-heart');
let like_span = document.querySelectorAll('.like-span');
let clicked = false;

for (let i = 0; i < like_cont.length; i++){
    like_cont[i].addEventListener('click', function (){
        like_i[i].classList.toggle('fas');
        like_icon[i].classList.toggle('likicoclk');
        like_value[i].classList.toggle('likvalclk');
        console.log(like_span[i].textContent);
        if (!clicked){
            clicked = true;
            like_span[i].textContent++;
        }else{
            clicked = false;
            like_span[i].textContent--;
        } 
    });
}