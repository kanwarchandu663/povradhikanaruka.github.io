document.addEventListener("DOMContentLoaded", function () {

    // Current year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mobile menu
    const menuButton = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav ul");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    // Contact form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all the fields.");
                return;
            }

            alert(
                "Thank you, " + name +
                "! Your message has been submitted successfully."
            );

            contactForm.reset();
        });
    }

    // Order buttons
    const productButtons = document.querySelectorAll(".buy-btn");

    productButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const productName =
                button.getAttribute("data-product") || "Crochet Product";

            alert(
                "Thank you for your interest in " +
                productName +
                "! Please contact Radhika Kanwar for ordering."
            );
        });

    });

});
