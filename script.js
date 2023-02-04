const pass1 = document.getElementById("first-pass");
const pass2 = document.getElementById("second-pass");
const submit = document.getElementById("submit-button");
const pw1Error = document.getElementById('pass1-error');
const pw2Error = document.getElementById('pass2-error');
const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');

submit.addEventListener('click', (e) => { passMatch() });
pass2.addEventListener('focusout', (e) => {
    if (pass1.value != "") {
        passMatch();
    }
})
pass1.addEventListener('focusin', (e) => { pass2.classList.remove('error') });
pass2.addEventListener('focusin', (e) => { pass2.classList.remove('error') });
pass1.addEventListener('focusout', (e) => {
    if (pass2.value != "") {
        passMatch();
    }
});
fName.addEventListener('focusout', (e) => { firstNameVal() });
lName.addEventListener('focusout', (e) => { lastNameVal()});

function passMatch() {
    if (pass1.value === pass2.value && pass1.value !== "") {
        pass1.classList.remove('error');
        pass2.classList.remove('error');
        pass1.classList.add('valid');
        pass2.classList.add('valid');
        submit.removeAttribute('disabled');
        pw2Error.textContent = '';
        pw1Error.textContent = '';
    }
    else if(pass1.value !== pass2.value){
        submit.setAttribute('type', 'button');
        pw2Error.textContent = "Passwords must match";
        pw2Error.classList.add('error');
        pass1.classList.remove('valid');
        pass2.classList.remove('valid');
        pass2.classList.add('error');
        pass1.classList.add('error');
    }
    else if(pass1.value == '' || pass2.value ==''){
        submit.setAttribute('type', 'button');
        pw2Error.classList.add('error');
        pass1.classList.remove('valid');
        pass2.classList.remove('valid');
        pass2.classList.add('error');
        pass1.classList.add('error');
        pw2Error.textContent = 'Password cannot be blank';
    }
}
function firstNameVal() {
    if (fName.value === '') {
        fName.classList.add('error');
        fName.classList.remove('valid');
        document.getElementById('fName-error').textContent = 'Please enter your first name';
        document.getElementById('fName-error').classList.add('error');
    }
    else {
        fName.classList.remove('error');
        fName.classList.add('valid');
        document.getElementById('fName-error').textContent = '';
        document.getElementById('fName-error').classList.remove('error');
    }
}
function lastNameVal() {
    if (lName.value.length < 2) {
        lName.classList.add('error');
        lName.classList.remove('valid');
        document.getElementById('lName-error').textContent = 'Please enter your last name';
        document.getElementById('lName-error').classList.add('error');
    }
    else {
        lName.classList.remove('error');
        lName.classList.add('valid');
        document.getElementById('lName-error').textContent = '';
        document.getElementById('lName-error').classList.remove('error');
    }
}



