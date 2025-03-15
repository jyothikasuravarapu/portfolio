document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animate");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Navbar active state on scroll
    const navLinks = document.querySelectorAll(".navbar a");
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        sections.forEach((section, index) => {
            if (scrollPos >= section.offsetTop - 100) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    });
});
