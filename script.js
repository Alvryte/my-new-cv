// 1. Typing Effect for Hero Section
const textArray = ["a CSPE Eligible", "an Aspiring Game System Developer", "a Junior Visual Designer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typewriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// 2. Scroll Reveal & Skill Bar Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};
const observerOptionss = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Fade in elements
            entry.target.classList.add('show');
            
            // Fill skill bars when they appear on screen
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
            
            // Optional: Stop observing once revealed
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const observers = new IntersectionObserver((entries, observers) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Fade in elements
            entry.target.classList.add('show');
            
            // Fill skill bars when they appear on screen
            const progressBars = entry.target.querySelectorAll('.progress-main');
            progressBars.forEach(bar => {
                const widths = bar.getAttribute('data-width');
                bar.style.width = widths;
            });

            // Optional: Stop observing once revealed
            observers.unobserve(entry.target);
        }
    });
}, observerOptionss);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const hiddenElementss = document.querySelectorAll('.hidden');
hiddenElementss.forEach((el) => observers.observe(el));


// 3. Portfolio Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
//4. Copy the email when Clicked
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        // Get the text from the data attribute
        const textToCopy = this.getAttribute('data-text');
        
        // Write the text to the clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Optional: Provide visual feedback to the user
            const originalHTML = this.innerHTML;
            this.innerHTML = "Copied!";
            setTimeout(() => this.innerHTML = originalHTML, 1000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
