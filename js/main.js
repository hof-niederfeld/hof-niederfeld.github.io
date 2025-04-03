function loadPage(page) {

    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => document.querySelector("main").innerHTML = data)
        .catch(error => console.error("", error));
}


function main() {

    loadPage("main");

    const links = [
        { id: "#link-main", page: "main" },
        { id: "#link-page1", page: "page1" },
        { id: "#link-page2", page: "page2" },
        { id: "#link-legal-notice", page: "legal-notice" },
        { id: "#link-privacy-policy", page: "privacy-policy" },
    ];

    links.forEach(link => {
        const element = document.querySelector(link.id)
        element.addEventListener("click", function (e) {
            e.preventDefault();
            loadPage(link.page);
        });
    });
}


document.addEventListener('DOMContentLoaded', main);
