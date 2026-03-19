const slides = {
    seismoai: [    
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
        },
        {
            image: "images/SeimoaiScreen.jpg",          
            alt: "SeismoAI User Interface",
            caption: "SeismoAI User Interface"
        },
        {
            image: "images/seimo_mosquitto.jpg",
            alt: "SeismoAI MQTT Communication",
            caption: "SeismoAI MQTT Communication"
        }
    ],
    /* Add more slideshows here if needed */
    jarvis: [
        { image: "images/jarvis_img/final_Prototype.jpg",
            alt: "Jarvis Final Prototype",
            caption: "Jarvis Final Prototype"

        },
     
        {
            image: "images/jarvis_img/mirror.jpg",
            alt: "Jarvis Mirror App",
            caption: "Jarvis Mirror Interface"
        },
        {
            image: "images/jarvis_img/app_Testing.jpg",
            alt: "Jarvis App Testing",
            caption: "Jarvis Application Testing"
        },
        {
            image: "images/jarvis_img/Jarvis Mobile app.JPG",
            alt: "Jarvis Mobile App",
            caption: "Jarvis Mobile Application Interface"
        },
        {
            image: "images/jarvis_img/MirrorModules.JPG",
            alt: "Jarvis Mirror Modules",
            caption: "Jarvis Mirror Modules"
        },
        {
            image: "images/jarvis_img/softwarediagram.jpg",
            alt: "Jarvis Software Diagram",
            caption: "Jarvis Software Architecture Diagram"
        }

    ]
};

const currentIndex = {
  seismoai: 0,
  jarvis: 0,
};

function showSlide(name) {
  const slideList = slides[name];
  const index = currentIndex[name];

  const img = document.getElementById(name + "-slide");
  const caption = document.getElementById(name + "-caption");

  if (!img || !caption) return; // prevents errors on other pages

  img.src = slideList[index].image;
  img.alt = slideList[index].alt;
  caption.textContent = slideList[index].caption;
}

function changeSlide(name, direction) {
  const slideList = slides[name];

  currentIndex[name] += direction;

  if (currentIndex[name] < 0) {
    currentIndex[name] = slideList.length - 1;
  }
  if (currentIndex[name] >= slideList.length) {
    currentIndex[name] = 0;
  }

  showSlide(name);
}

/* Initialize only if slideshow exists */
window.onload = function () {
  if (document.getElementById("seismoai-slide")) {
    showSlide("seismoai");
  }
  /* Add similar checks for other slideshows if needed */
  if (document.getElementById("jarvis-slide")) {
    showSlide("jarvis");
  }
};