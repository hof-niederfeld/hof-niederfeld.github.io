function main() {

    const toc = document.querySelector("#cu-datenschutz-toc")

    document.querySelectorAll("#cu-datenschutz-content h2").forEach(title => {

        // Create an ID for the current title and add it to the element.
        const id = title.innerHTML
            .replace(/^\d+\.\s*/, '')
            .toLowerCase()
            .replace(/\s+/g, '-');
        title.id = id;

        // Create a link element for the table of contents with the
        // appropriate attributes.
        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = "#" + id;
        a.innerHTML = title.innerHTML;
        toc.appendChild(a);
    });
}


document.addEventListener('DOMContentLoaded', main);
