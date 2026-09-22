document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       HEADER
    ========================= */

    const header = `
        <header class="site-header">

            <div class="logo-area">
                Lauren<br>Bock
            </div>

            <div class="header-content">

                <div class="header-intro">
                    Personal portfolio and professional website
                </div>

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

            </div>

        </header>
    `;


    const headerContainer =
        document.getElementById("site-header");

    if (headerContainer) {
        headerContainer.innerHTML = header;
    }


    /* =========================
       ACTIVE PAGE
    ========================= */

    let currentPage =
        window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    const navigationLinks =
        document.querySelectorAll(".top-navigation a");


    navigationLinks.forEach(function (link) {

        if (
            link.getAttribute("data-page") === currentPage
        ) {
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
                Contact:
                <a href="mailto:laurenrox4055@gmail.com">
                    laurenrox4055@gmail.com
                </a>
            </p>

        </footer>
    `;


    const footerContainer =
        document.getElementById("site-footer");

    if (footerContainer) {
        footerContainer.innerHTML = footer;
    }

});
