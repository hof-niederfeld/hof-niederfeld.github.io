function loadPage(oldPage, newPage) {

    // Update the page content.
    fetch(`pages/${newPage}.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
            if (newPage == "main") {
                const map = L.map("cu-map").setView([50.433446, 8.078516], 12.8);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);
                L.marker([50.433446, 8.078516]).addTo(map);
            }
        })
        .catch(error => console.error(error));

    // Update the page title.
    const navLink = document.querySelector(`.nav-link[href="#${newPage}"]`);
    document.title = newPage != "main"
        ? `${navLink.textContent} • Hof Niederfeld`
        : "Hof Niederfeld";

    // Close the navbar if necessary.
    const navbarNav = document.querySelector("#navbar-nav")
    if (navbarNav.classList.contains("show"))
        bootstrap.Offcanvas.getInstance(navbarNav).hide();

    // Update the active class within the navbar.
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(navLink => {
        const route = navLink.getAttribute("href").split("#")[1];
        if (route == oldPage) { navLink.classList.remove("active") };
        if (route == newPage) { navLink.classList.add("active") };
    });
}

function main() {

    const hash = window.location.hash;
    const currentPage = hash != "" ? hash.slice(1) : "main";

    loadPage(null, currentPage);

    window.addEventListener("hashchange", (event) => {
        const oldPage = event.oldURL.split("#")[1];
        const newPage = event.newURL.split('#')[1];
        loadPage(oldPage, newPage);
    });
}


document.addEventListener('DOMContentLoaded', main);
