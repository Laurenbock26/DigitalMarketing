document.addEventListener("DOMContentLoaded", function () {

```
/* =========================
   HEADER
========================= */

const header = document.getElementById("site-header");

if (header) {

    header.innerHTML = `
        <header class="site-header">

            <div class="logo-area">
                Lauren Bock
            </div>

            <div class="header-content">

                <div class="header-intro">
                    Personal portfolio and professional website
                </div>

                <nav class="top-navigation">

                    <a href="index.html">Home</a>

                    <a href="about.html">About Me</a>

                    <a href="education.html">Education</a>

                    <a href="experience.html">Professional Experience</a>

                    <a href="involvement.html">Involvement</a>

                </nav>

            </div>

        </header>
    `;


    /* =========================
       ACTIVE PAGE
    ========================= */

    const currentPage =
        window.location.pathname.split("/").pop();


    const navigationLinks =
        document.querySelectorAll(".top-navigation a");


    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage === currentPage ||
            (currentPage === "" &&
            linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });

}


/* =========================
   FOOTER
========================= */

const footer =
    document.getElementById("site-footer");


if (footer) {

    footer.innerHTML = `
        <footer class="site-footer">

            <p>© 2026 Lauren Bock</p>

            <p>
                Contact:
                <a href="mailto:your-email@example.com">
                    your-email@example.com
                </a>
            </p>

        </footer>
    `;

}
```

});
