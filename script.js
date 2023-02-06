const pass1 = document.getElementById("first-pass");
const pass2 = document.getElementById("second-pass");
const submit = document.getElementById("submit-button");

pass1.addEventListener('focusin', (e) => { pass1.classList.remove('error'); });
pass1.addEventListener('focusin', (e) => { RemoveErrors });
pass2.addEventListener('focusin', (e) => { pass2.classList.remove('error'); });
pass2.addEventListener('focusin', (e) => { RemoveErrors });

pass2.addEventListener('focusout', (e) => {
    if (pass1.value != "") {
        passMatch();
    }
});
pass1.addEventListener('focusout', (e) => {
    if (pass2.value != "") {
        passMatch();
    }
});

function passMatch() {
    if (pass2.value === pass1.value && pass2.value.length > 6) {
        RemoveErrors();
        pass1.classList.add('valid');
        pass2.classList.add('valid');
        submit.removeAttribute('disabled');
    }
    else if (pass1.value == '' || pass2.value == '') {
        RemoveErrors();
        submit.setAttribute('disabled', '');
        pass1.classList.remove('valid');
        pass2.classList.remove('valid');
    }
    else if (pass1.value !== pass2.value) {
        submit.setAttribute('disabled', '');
        if (pass1.nextSibling == null) {
            PassError(pass1, "Passwords do not match");
            PassError(pass2, "Passwords do not match");
        }
        pass1.classList.remove('valid');
        pass2.classList.remove('valid');
        pass1.classList.add('error');
        pass2.classList.add('error');
    }
}

function PassError(element, message) {
    let newErr = document.createElement('sub');
    newErr.classList.add('error');
    newErr.textContent = message;
    element.parentNode.insertBefore(newErr, element.nextSibling);
}
function RemoveErrors() {
    if(pass1.nextSibling != null){
        pass1.nextSibling.remove();
        pass2.nextSibling.remove();
        pass1.classList.remove('error');
        pass2.classList.remove('error');
    }
    
}