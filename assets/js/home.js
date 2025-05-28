function initMap() {

    const map = L.map("cu-map").setView([50.433446, 8.078516], 12.8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([50.433446, 8.078516]).addTo(map);
}


document.addEventListener('DOMContentLoaded', initMap);
