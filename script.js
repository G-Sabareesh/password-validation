const passwordInput = document.querySelector(".pass-field input"),
    eyeIcon = document.querySelector(".pass-field i"),
    requirementList = document.querySelectorAll(".requirement-list li");

const requirement = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[A-Z]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[0-9]/, index: 3 },
    { regex: /[^A-Za-z0-9]/, index: 4 }

]
passwordInput.addEventListener("keyup", (e) => {
    requirement.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        }
        else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    });
});
eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});