function loadPage(oldPage, newPage) {

    // Update the page content.
    fetch(`pages/${newPage}.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
            if (newPage == "main") {
                const map = L.map("cu-map").setView([50.433446, 8.078516], 11.8);
                L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
                    minZoom: 0,
                    maxZoom: 20,
                    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    ext: 'png'
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
