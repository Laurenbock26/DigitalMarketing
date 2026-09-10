document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       TOP NAVIGATION
    ========================= */

    const topNavigation = `
        <nav class="top-navigation">

            <a href="index.html" data-page="index.html">
                Home
            </a>

            <a href="about.html" data-page="about.html">
                About Me
            </a>

            <a href="education.html" data-page="education.html">
                Education
            </a>

            <a href="experience.html" data-page="experience.html">
                Professional Experience
            </a>

            <a href="contact.html" data-page="contact.html">
                Contact
            </a>

        </nav>
    `;


    /* =========================
       LEFT SIDEBAR NAVIGATION
    ========================= */

    const leftNavigation = `
        <h2>Navigation</h2>

        <nav class="left-navigation">

            <a href="index.html" data-page="index.html">
                Home
            </a>

            <a href="about.html" data-page="about.html">
                About Me
            </a>

            <a href="education.html" data-page="education.html">
                Education
            </a>

            <a href="experience.html" data-page="experience.html">
                Professional Experience
            </a>

            <a href="contact.html" data-page="contact.html">
                Contact
            </a>

        </nav>
    `;


    /* =========================
       RIGHT SIDEBAR
    ========================= */

    const rightSidebar = `
        <h2>Quick Links</h2>

        <div class="quick-links">

            <a href="about.html">
                About Me
            </a>

            <a href="education.html">
                Education
            </a>

            <a href="experience.html">
                Experience
            </a>

            <a href="contact.html">
                Contact Me
            </a>

            <a href="https://www.linkedin.com/" target="_blank">
                LinkedIn
            </a>

            <a href="https://github.com/" target="_blank">
                GitHub
            </a>

        </div>
    `;


    /* =========================
       HEADER
    ========================= */

    const header = `
        <header class="site-header">

            <div class="logo-area">
                Lauren Bock
            </div>

            <div class="header-content">

                <div class="header-intro">
                    Personal portfolio and professional website
                </div>

                ${topNavigation}

            </div>

        </header>
    `;


    /* =========================
       INSERT HEADER
    ========================= */

    const headerContainer = document.getElementById("site-header");

    if (headerContainer) {
        headerContainer.innerHTML = header;
    }


    /* =========================
       INSERT LEFT NAVIGATION
    ========================= */

    const leftContainer = document.getElementById("left-navigation");

    if (leftContainer) {
        leftContainer.innerHTML = leftNavigation;
    }


    /* =========================
       INSERT RIGHT SIDEBAR
    ========================= */

    const rightContainer = document.getElementById("right-sidebar");

    if (rightContainer) {
        rightContainer.innerHTML = rightSidebar;
    }


    /* =========================
       ACTIVE PAGE
    ========================= */

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    const navigationLinks = document.querySelectorAll(
        "[data-page]"
    );

    navigationLinks.forEach(function (link) {

        if (link.getAttribute("data-page") === currentPage) {
            link.classList.add("active");
        }

    });


    /* =========================
       FOOTER
    ========================= */

    const footer = `
        <footer class="site-footer">

            <p>
                © 2026 Lauren Bock. All rights reserved.
            </p>

            <p>
                Contact: your-email@example.com
            </p>

        </footer>
    `;

    const footerContainer = document.getElementById("site-footer");

    if (footerContainer) {
        footerContainer.innerHTML = footer;
    }

});
