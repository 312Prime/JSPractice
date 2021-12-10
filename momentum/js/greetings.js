const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeing = document.querySelector("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const link = document.querySelector("a");

function onLoginSubmit(info) {
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameThatTheUserWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
    console.log(usernameThatTheUserWrote)
    paintGreetings();
}  

function handleLinkClick(info){
    info.preventDefault();
    console.log(info);
    alert("clicked");
}

function paintGreetings(){
    const usernameThatTheUserWrote = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${usernameThatTheUserWrote}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    //show the greetings
    paintGreetings();
}
