(function () {
    emailjs.init("USERID");
})();



function validate() {
    let loader = document.querySelector(".loader");
    let name = document.querySelector(".username");
    let phone = document.querySelector(".phone");
    let company = document.querySelector(".company");
    let email = document.querySelector(".email");
    let message = document.querySelector(".message");
    let btn = document.querySelector(".submit");

    const isEmail = () => {
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.value.match(regex)) {
            return true;
        } else {
            return false;
        }
    }

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value !== "" && isEmail() && message.value !== "") {
            
            success();
            loader.style.display = "flex";
            sendmail(name.value, phone.value, company.value, email.value, message.value);
            success();
            loader.style.display = "none";
            name.value = "";
            phone.value = "";
            company.value = "";
            email.value = "";
            message.value = "";

        } else if (name.value !== "" && isEmail() == false && message.value !== "") {
            
            errorEmail();
        }
        else {

            emptyerror();
        }
    });
}

validate();

function sendmail(name, phone, company, email, message) {
    emailjs.send("SERVICE ID", "TEMPLATE NAME", {
        name: name,
        phone: phone,
        company: company,
        email: email,
        message: message,
    });
}

function emptyerror() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Merci de remplir correctement les champs requis *!",
    });
}

function error() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
    });
}
function errorEmail() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email non valide!",
    });
}

function success() {
    Swal.fire({
        icon: "success",
        title: "Success...",
        text: "Message envoyé ! Nous vous recontacterons dès que possible.",
    });
}