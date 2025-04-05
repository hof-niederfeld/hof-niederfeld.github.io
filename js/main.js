const LINKS = [
    { id: "#link-main", page: "main" },
    { id: "#link-page1", page: "page1" },
    { id: "#link-page2", page: "page2" },
    { id: "#link-legal-notice", page: "legal-notice" },
    { id: "#link-privacy-policy", page: "privacy-policy" },
];


function loadPage(page) {

    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {

            const linkElement = document.querySelector(`#link-${page}`)

            // Update main text and add active class to the link.
            document.querySelector("main").innerHTML = data;
            linkElement.classList.add("active")

            // Close the navbar toggler in mobile view. This needs to be done
            // manually since default behavior is prevented.
            const navbarNav = document.querySelector("#navbar-nav")
            if (navbarNav.classList.contains("show"))
                bootstrap.Collapse.getInstance(navbarNav).hide();

            // Update the page title.
            const newTitle = `${linkElement.innerHTML} • Hof Niederfeld`;
            document.title = page != "main" ? newTitle : "Hof Niederfeld";
        })
        .catch(error => console.error(error));
}


function main() {

    const hash = window.location.hash
    let currentPage = hash != "" ? hash.slice(1) : "main"

    loadPage(currentPage);

    // If the location hash changes, remove the active class from the
    // previous link and load the new page.
    window.addEventListener("hashchange", (event) => {
        const oldPage = event.oldURL.split("#")[1]
        const linkElement = document.querySelector(`#link-${oldPage}`)
        linkElement.classList.remove("active")
        const newPage = event.newURL.split('#')[1];
        loadPage(newPage);
    });

    // If a link is clicked, update the location hash and prevent
    // default behavior to avoid a page reload.
    LINKS.forEach(link => {
        const element = document.querySelector(link.id);
        element.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.hash = link.page;
        });
    });
}


document.addEventListener('DOMContentLoaded', main);
