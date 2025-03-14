document.addEventListener("DOMContentLoaded", function () {
    // Smooth Fade-In Effect for Sections
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial check

    // Dynamic Greeting Message
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    let greetingText = "";

    if (currentHour < 12) {
        greetingText = "Good Morning! 🌞";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon! ☀️";
    } else {
        greetingText = "Good Evening! 🌙";
    }

    greetingElement.innerText = greetingText;
    greetingElement.style.opacity = "1";
    document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('h1');
    let originalText = title.textContent;
    let alternateText = "Siris's Digital World!";
    let isOriginal = true;

    title.addEventListener('click', function() {
        if (isOriginal) {
            title.textContent = alternateText;
        } else {
            title.textContent = originalText;
        }
        isOriginal = !isOriginal;
    });
    
}
