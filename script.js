
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});


document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation");
    });
});



document.getElementById("year").textContent =
    new Date().getFullYear();



const profilePhoto = document.getElementById("profile-photo");
const photoFallback = document.getElementById("photo-fallback");

function showProfilePhoto() {
    profilePhoto.classList.add("loaded");
    photoFallback.style.display = "none";
}

function showInitials() {
    profilePhoto.classList.remove("loaded");
    photoFallback.style.display = "block";
}

profilePhoto.addEventListener("load", showProfilePhoto);
profilePhoto.addEventListener("error", showInitials);


if (profilePhoto.complete) {
    if (profilePhoto.naturalWidth > 0) {
        showProfilePhoto();
    } else {
        showInitials();
    }
}

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀️";
    }
});