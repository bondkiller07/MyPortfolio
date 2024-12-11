document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-dot');
    let cursorTimeout;

    // Follow cursor movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Show cursor when moving
        cursor.style.opacity = '1';
        
        // Hide cursor when not moving
        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            cursor.style.opacity = '0';
        }, 3000);
    });

    // Handle text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span');
    
    textElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('text-hover');
            // Adjust cursor height based on text size
            const textHeight = parseInt(window.getComputedStyle(element).fontSize);
            cursor.style.height = `${textHeight + 4}px`; // Adding 4px for slightly larger than text
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('text-hover');
            cursor.style.height = '40px'; // Updated to match new default size
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            cursor.style.opacity = '0';
        }
    });

    // Show cursor when entering window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
});

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkModeToggle");
  
    // Default mode: dark
    document.body.classList.remove("light-mode");
  
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  
      // Update icon for current mode
      const isLightMode = document.body.classList.contains("light-mode");
      toggleButton.innerHTML = isLightMode
        ? '<i class="fas fa-moon"></i>' // Moon for switching back to dark mode
        : '<i class="fas fa-sun"></i>'; // Sun for switching to light mode
    });
});

// Greeting Language Cycle
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and parsed');
    
    // Greeting Language Cycle
    const greetings = ['hi', 'hallo', 'bonjour', 'hola', 'नमस्ते', 'ciao', '你好', '안녕하세요', 'こんにちは']; 
    // hi (English), hallo (German), bonjour (French), hola (Spanish), नमस्ते (Hindi), 
    // ciao (Italian), 你好 (Chinese), 안녕하세요 (Korean), こんにちは (Japanese)    
    let currentIndex = 0;
  
    const greetElement = document.getElementById('greet');
    console.log(greetElement); // Make sure this references the right element
  
    if (greetElement) {
      setInterval(() => {
        currentIndex = (currentIndex + 1) % greetings.length; // Loop through languages
        greetElement.textContent = greetings[currentIndex]; // Update the greeting
      }, 2000); // Switch greeting every 2 seconds
    }
  });
  

// Button Hover Effect (Text movement)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = e;
        const { offsetWidth, offsetHeight } = button;

        const x = offsetX / offsetWidth * 100;
        const y = offsetY / offsetHeight * 100;

        button.style.setProperty('--x', `${x}%`);
        button.style.setProperty('--y', `${y}%`);
    });
});

// Say Hi Button Click (Shows textarea and hides other sections)
document.getElementById("sayHiButton").addEventListener("click", function () {
    document.getElementById("textareaSection").classList.add("visible");
    document.querySelector(".hero").classList.add("hidden-page");
    document.querySelector(".portfolio").classList.add("hidden-page");
    document.querySelector(".footer").classList.add("hidden-page");
    document.querySelector(".write-section").classList.add("hidden-page"); // Added this line

    // Show the "Go Back" button
    document.getElementById("goBackButton").style.display = "inline-block";
});

// Go Back Button (Hides textarea and brings back sections)
document.getElementById("goBackButton").addEventListener("click", function () {
    document.getElementById("textareaSection").classList.remove("visible");
    document.querySelector(".hero").classList.remove("hidden-page");
    document.querySelector(".portfolio").classList.remove("hidden-page");
    document.querySelector(".footer").classList.remove("hidden-page");
    document.querySelector(".write-section").classList.remove("hidden-page"); // Added this line

    // Hide the "Go Back" button
    document.getElementById("goBackButton").style.display = "none";
    document.getElementById("sendButton").style.display = "none";
});

// Textarea visibility (when text is typed)
document.getElementById('message').addEventListener('input', function() {
    // Show send button only if something is written
    const sendButton = document.getElementById('sendButton');
    if (this.value.trim() !== "") {
        sendButton.style.display = 'block';
    } else {
        sendButton.style.display = 'none';
    }
});

// Button Hover Effect (For all buttons including Go Back and Send)
document.querySelectorAll('.btn, #goBackButton, #sendButton').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = e;
        const { offsetWidth, offsetHeight } = button;

        const x = (offsetX / offsetWidth) * 100;
        const y = (offsetY / offsetHeight) * 100;

        button.style.setProperty('--x', `${x}%`);
        button.style.setProperty('--y', `${y}%`);
    });
});

// Smooth Scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
