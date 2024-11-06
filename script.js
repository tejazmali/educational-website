





document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');

        questionButton.addEventListener('click', () => {
            item.classList.toggle('active');

            // Optionally, close other FAQ items when one is opened
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }



  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  
  // Update UI to notify the user they can add to home screen
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';

  installButton.addEventListener('click', (e) => {
    // Hide the app provided install promotion
    installButton.style.display = 'none';
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});

  
document.addEventListener('DOMContentLoaded', function () {
    var animatedLinks = document.querySelectorAll('.animated-link');
    var content = document.getElementById('content');
    var loader = document.getElementById('redirect-loader');

    function resetPageState() {
        content.classList.remove('fade-out');
        loader.style.display = 'none';
    }

    // Reset the content and loader visibility when the page is loaded or shown
    window.addEventListener('pageshow', resetPageState);
    resetPageState(); // Reset state when the script runs initially

    animatedLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior

            content.classList.add('fade-out');
            loader.style.display = 'block';

            // Wait for the animation to finish before redirecting
            setTimeout(function () {
                window.location.href = link.href;
            }, 1000); // 1000ms is the same as the animation duration
        });
    });
});


src = "https://unpkg.com/scrollreveal"

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".redirectButton");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default button behavior

            var delay = 500; // Delay time in milliseconds

            setTimeout(function () {
                window.location.href = button.dataset.href;
            }, delay);
        });
    });
});

// transition delay end
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.reveal');

    const revealOnScroll = function () {
        for (let i = 0; i < elements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = elements[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                elements[i].classList.add('reveal-active');
            } else {
                elements[i].classList.remove('reveal-active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load
});





document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            initializeMenuToggle(); // Ensure toggle works after loading
        });

    // Load footer
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });


        fetch('/study material/faq-note.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('faq-note').innerHTML = data;
        });
});











function initializeMenuToggle() {
    var menuToggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".nav");
    var navLinks = document.querySelectorAll(".nav ul li a");

    function toggleNav() {
        nav.classList.toggle("open");
        menuToggle.classList.toggle("open");
    }

    menuToggle.addEventListener("click", function () {
        toggleNav();
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (nav.classList.contains("open")) {
                toggleNav();
            }
        });
    });
}









window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function () {
        loadingScreen.style.display = 'none';
    },); // 1000 milliseconds = 1 second
});


// Initializing ScrollReveal
ScrollReveal().reveal('.reveal', {
    duration: 500,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
});







// notes page
function toggleChapters(element) {
    // Close all other sections
    document.querySelectorAll('.subject-title').forEach(subject => {
        if (subject !== element) {
            subject.classList.remove('active');
            subject.nextElementSibling.style.maxHeight = null;
        }
    });

    // Toggle the clicked section
    element.classList.toggle('active');
    const chapterList = element.nextElementSibling;
    if (chapterList.style.maxHeight) {
        chapterList.style.maxHeight = null;
    } else {
        chapterList.style.maxHeight = chapterList.scrollHeight + "px";
    }
}

// Automatically open Science section on page load
document.addEventListener('DOMContentLoaded', function () {
    const scienceTitle = document.querySelector('.subject-title');
    scienceTitle.classList.add('active');
    scienceTitle.nextElementSibling.style.maxHeight = scienceTitle.nextElementSibling.scrollHeight + "px";
});

//notes page end




















