const SignInBtn = document.querySelector('.signin-btn')
const SignUpBtn = document.querySelector('.signup-btn ')
const formBox = document.querySelector('.form-box')
const body = document.body;

SignUpBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active')
});
SignInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active')
});
