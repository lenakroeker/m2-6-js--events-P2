// add js here
const error = document.getElementById("error");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const errormsg = document.getElementById("errormsg");
const words = ["horse", "marmalade", "carburator", "slink", "ardent", "denim", "stroll", "carnival", "smidgen", "purpose", "mega", "blast", "harbinger", "mouse", "cardboard", "lemur", "kitty", "grouse", "apothecary", "limbo", "kettle", "morning", "gravity", "future", "mellow"]

function submit(evt) {
    if (evt.target.matches("#clear")) {
        clearErrors();
    }

    if (evt.target.matches("#submit")) {
        evt.preventDefault();

        if (pass1.value.length < 10) {
            clearErrors();
            error.style.display = "block";
            errormsg.innerText = `Your password is too short. How about "${words[Math.floor(Math.random() * words.length)]}-${words[Math.floor(Math.random() * words.length)]}-${words[Math.floor(Math.random() * words.length)]}-${words[Math.floor(Math.random() * words.length)]}"?`;
            pass1.style.border = "3px solid red";
            pass1.focus();
        }

        else if (pass1.value !== pass2.value) {
            clearErrors();
            error.style.display = "block";
            errormsg.innerText = "Passwords must match";
            pass2.style.border = "3px solid red";
            pass2.focus();
        }

        else if (!document.getElementById("terms").checked) {
            clearErrors();
            window.alert("Please agree to terms and conditions");
        } else {
            window.alert("Success!");
            error.style.display = "none";
        }
    }
}


function clearErrors() {
    error.style.display = "none";
    pass1.style.border = "3px solid #f2f2f2"
    pass2.style.border = "3px solid #f2f2f2"
}







document.addEventListener("click", submit);