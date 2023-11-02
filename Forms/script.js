/* Add a keyup listener on the first input field, so that once you type a letter in this field,
it goes into the <span id="display-firstname">.The content of the field and the span should always remain the same. */
const firtinputField = document.getElementById('firstname');
const spanfirstName = document.getElementById('display-firstname');

firtinputField.addEventListener("keyup", (event) => {
    if (event.key.match(/[a-zA-Z]/)) { // when typing letters
        const inputValue = firtinputField.value;
        spanfirstName.textContent = inputValue; //content of span and input value are the same
    }
})

/* Add a keyup listener on the second input (the number input),
so that if the age is below 18 the content of the section a-hard-truth remains hidden,
otherwise show them this hard to swallow fact.*/
const secondinputField = document.getElementById("age");
const hardtruthSection = document.getElementById("a-hard-truth");

secondinputField.addEventListener("keyup", () => {
    if (secondinputField.value > 18) {
        hardtruthSection.style.visibility = "visible";
    } else {
        hardtruthSection.style.visibility = "hidden"; 
    }
})


/*Add a keyup listener on both fields and show a visual hint
(for instance turn the field red) if the password is too short (less than 6 characters)
or if the password and its confirmation do not match.*/
const pwdField = document.getElementById("pwd");
const confirmpwdField = document.getElementById("pwd-confirm");

pwdField.addEventListener("keyup", () => {
    if (pwdField.value.length < 6) {
        pwdField.style.backgroundColor = "red";
    } else {
        pwdField.style.backgroundColor = "";
    }
})

confirmpwdField.addEventListener("keyup", () => {
    if (pwdField.value != confirmpwdField.value) {
        pwdField.style.backgroundColor = "red";
        confirmpwdField.style.backgroundColor = "red";
    }
    else {
        pwdField.style.backgroundColor = "";
        confirmpwdField.style.backgroundColor = "";
    }
})


/*Finally, use a change listener on the <select> field to toggle a dark mode on the whole page.
For ease of use, we'll say that the dark mode is just turning the background black and the text white.
*/
const pwdField = document.getElementById("pwd");