
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUser = {
        name:form.name.valueOf,
        phoneNumber:form["phone-number"].value,
        userImage:form.image.value,
        email:form.email.value,
    }
})