const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginClick() {
    console.log("hello", loginInput.value);
}

loginButton.addEventListener("click",handleLoginClick);