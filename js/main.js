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
            document.querySelector("main").innerHTML = data;
            window.location.hash = page;
        })
        .catch(error => console.error(error));
}


function main() {

    const hash = window.location.hash
    let currentPage = hash != "" ? hash.slice(1) : "main"

    loadPage(currentPage);

    window.addEventListener("hashchange", (event) => {
        const page = event.newURL.split('#')[1];
        loadPage(page);
    });

    LINKS.forEach(link => {
        const element = document.querySelector(link.id);
        element.addEventListener("click", function (event) {
            event.preventDefault();
            loadPage(link.page);
        });
    });
}


document.addEventListener('DOMContentLoaded', main);
