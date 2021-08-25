const USER_NAME = document.getElementById('userName');
const USER_SURNAME = document.getElementById('userSurname');
const USER_EMAIL = document.getElementById('userEmail');
const LOGIN = document.getElementById('userLogin');
const PASSWORD = document.getElementById('userPassword');
const BTN = document.getElementById('registrBtn');
const MESSAGE = document.getElementById('message');
const HELLO = document.getElementById('hello');


function allLetter(input) {
    let letters = /^[А-Яа-я]+$/;
    if(input.value.match(letters)){
        return true;
    }else {
        MESSAGE.innerHTML += "<p>Вы можете ипользовать только кириллицу в поле Имя</p>";
        return false
    }
};
function allLetterSurname(input) {
    let letters = /^[А-Яа-я]+$/;
    if(input.value.match(letters)){
        return true;
    }else {
        MESSAGE.innerHTML += "<p>Вы можете ипользовать только кириллицу в поле Фамилия</p>";
        return false
    }
};
function allLetterEng(input) {
    let letters = /^[A-Za-z]+$/;
    if(input.value.match(letters)){
        return true;
    }else {
        MESSAGE.innerHTML += "<p>Вы можете ипользовать только кириллицу в поле Имя</p>";
        return false
    }
};
function login(input) {
    let letters = /^[A-Za-zА-Яа-я0-9\_\.\-\.]+$/;
    if(input.value.match(letters)){
        return true;
    }else {
        MESSAGE.innerHTML += "<p>Вы можете использовать буквы латиницы и кириллицы, а так же цифры и символы _ , - в поле Логин </p>";
        return false
    }
};
function password(input) {
    let letters = /^[A-Za-z0-9\_\.\-\.]+$/;
    if(input.value.match(letters)){
        return true;
    }else {
        MESSAGE.innerHTML += "<p>Вы можете использовать буквы латиницы и кириллицы, а так же цифры и символы _ , - в поле Пароль </p>";
        return false
    }
};

function emailValid(input) {
    let symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.match(symbols)){
        return true
    }else {
        MESSAGE.innerHTML += "<p>Ваш email некорректен</p>";
        return false
    }
}



BTN.addEventListener('click', function validate() {
    allLetter(USER_NAME);
    allLetterSurname(USER_SURNAME);
    emailValid(USER_EMAIL);
    login(LOGIN);
    password(PASSWORD);
    if(MESSAGE.innerHTML === "") {
        HELLO.innerHTML = "<span>Добро пожаловать   </span>" + USER_NAME.value + "<p></p>" + "<span>подтвердите пожалуйста вашу почту   </span>"
        + USER_EMAIL.value + "<span>, перейдите по ссылке которую мы прислали на ваш почтовый ящик</span>"
    };
})
