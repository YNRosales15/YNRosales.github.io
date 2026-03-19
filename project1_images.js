const slides = [
        {
            image: "images/seimoAI_final.jpg",
            alt: "SeismoAI Final Prototype",
            caption: "SeismoAI Final Prototype"
        },
        {
            image: "images/seismoProBoard.jpg",
            alt: "SeismoAI Project Board",
            caption: "SeismoAI Prototype Board"
        },
        {
            image: "images/seismoHardwarere.jpg",
            alt: "SeismoAI Hardware Communication",
            caption: "SeismoAI Hardware and Communication"
        },
        {
            image: "images/test_seismoAI.JPG",
            alt: "SeismoAI Test Setup",
            caption: "SeismoAI Testing Setup"
        },
        {
            image: "images/seimoAi_Mobileapp.jpg",
            alt: "SeismoAI Mobile App",
            caption: "SeismoAI Mobile Application Interface"
        },
        {
            image: "images/Ai_analysis.jpg",
            alt: "SeismoAI Earthquake Alert",
            caption: "SeismoAI Analysis Result of an Event"
        },
        {
            image: "images/Ai_analysisFlow.jpg",
            alt: "SeismoAI Deployment",
            caption: "AI Pipeline Flow"
        }
    ];

    let currentSlide = 0;

    function showSlide(index) {
        const slideImage = document.getElementById("slide-image");
        const slideCaption = document.getElementById("slide-caption");

        slideImage.src = slides[index].image;
        slideImage.alt = slides[index].alt;
        slideCaption.textContent = slides[index].caption;
    }

    function nextSlide(direction) {
        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
});