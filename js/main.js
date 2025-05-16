function loadPage(newPage) {

    // Update the page content.
    fetch(`pages/${newPage}.html`)
        .then(response => response.text())
        .then(data => document.querySelector("main").innerHTML = data)
        .catch(error => console.error(error));

    // Update the page title.
    const navLink = document.querySelector(`.nav-link[href="#${newPage}"]`);
    const dropdownItem = document.querySelector(`.dropdown-item[href="#${newPage}"]`);
    document.title = newPage != "home"
        ? `${(navLink ?? dropdownItem).textContent} • Hof Niederfeld`
        : "Hof Niederfeld";

    // Close the navbar if necessary.
    const navbarNav = document.querySelector("#offcanvas-navbar")
    if (navbarNav.classList.contains("show"))
        bootstrap.Offcanvas.getInstance(navbarNav).hide();

    // Update the active class within the navbars.
    document.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
    (navLink ?? dropdownItem).classList.add("active");
    if (dropdownItem) {
        document.querySelector(".dropdown-toggle").classList.add("active");
    }
}

function main() {

    const hash = window.location.hash;
    const currentPage = hash != "" ? hash.slice(1) : "home";

    loadPage(currentPage);

    window.addEventListener("hashchange", (event) => {
        const newPage = event.newURL.split('#')[1];
        loadPage(newPage);
    });
}


document.addEventListener('DOMContentLoaded', main);
