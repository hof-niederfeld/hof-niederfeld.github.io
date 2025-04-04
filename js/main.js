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
            if (history.state && history.state.page !== page) {
                const url = page == "main" ? "/" : `/${page}`;
                history.pushState({ page: page }, "", url);
            }
        })
        .catch(error => console.error(error));
}


function main() {

    history.replaceState({ page: "main" }, "", "/");
    loadPage("main");

    window.addEventListener('popstate', (event) => {
        loadPage(event.state.page);
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
