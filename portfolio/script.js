// DOM Elements
const checkbox = document.getElementById("checkbox")
const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")
const contactForm = document.getElementById("contact-form")
const navItems = document.querySelectorAll(".nav-links a")

// Theme Toggle
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme")
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light")
})

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
    checkbox.checked = true
}

// Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open")
    navLinks.classList.toggle("active")
})

// Close mobile menu when clicking on a nav item
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
            menuBtn.classList.remove("open")
            navLinks.classList.remove("active")
        }
    })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest("nav") && navLinks.classList.contains("active")) {
        menuBtn.classList.remove("open")
        navLinks.classList.remove("active")
    }
})

// Form Submission
contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For now, we'll just log it to the console and show a success message
    console.log("Form submitted:", { name, email, subject, message })

    // Show success message
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    contactForm.reset()
})

// Scroll Animation
const sections = document.querySelectorAll("section")
const navLi = document.querySelectorAll("nav ul li")

window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id")
        }
    })

    navLi.forEach((li) => {
        li.classList.remove("active")
        if (li.querySelector("a").getAttribute("href") === `#${current}`) {
            li.classList.add("active")
        }
    })
})

// Add active class to nav items when scrolling
window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("scrolled", window.scrollY > 0)
})

// Animation on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll(".section")

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active")
        }
    }
}

window.addEventListener("scroll", revealOnScroll)
revealOnScroll() // Initial check on page load