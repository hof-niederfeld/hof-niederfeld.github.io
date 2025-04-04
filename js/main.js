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
            document.querySelector(`#link-${page}`).classList.add("active")
            window.location.hash = page;
        })
        .catch(error => console.error(error));
}


function main() {

    const hash = window.location.hash
    let currentPage = hash != "" ? hash.slice(1) : "main"

    loadPage(currentPage);

    window.addEventListener("hashchange", (event) => {
        const oldPage = event.oldURL.split("#")[1]
        const linkElement = document.querySelector(`#link-${oldPage}`)
        linkElement.classList.remove("active")
        const newPage = event.newURL.split('#')[1];
        loadPage(newPage);
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
