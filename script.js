// =========================
// VIEW PROJECTS BUTTON
// =========================

const projectButton = document.querySelector("#home button");

projectButton.addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});


// =========================
// NAVBAR ACTIVE LINK
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Remove active class from all links
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        // Add active class to clicked link
        this.classList.add("active");

    });

});


// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to Shubham's Portfolio!");

const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }

});

// =========================
// TYPING ANIMATION
// =========================

const typingText = document.querySelector("#typingText");

const words = [
    "BCA Student",
    "Full Stack Developer",
    "Web Developer",
    "Programmer"
];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting === false) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, 100);
}

typeEffect();

```javascript
// =========================
// PROJECT FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get selected category
        const selectedCategory = button.dataset.filter;


        // Change active button

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Show / hide projects

        projectCards.forEach(function (card) {

            const projectCategory = card.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
```


