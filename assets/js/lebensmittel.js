function initMap() {

    const map1 = L.map("cu-map1").setView([50.433446, 8.078516], 11);
    const map2 = L.map("cu-map2").setView([50.433446, 9.078516], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map1);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map2);

    L.marker([50.433446, 8.078516]).addTo(map1);
    L.marker([50.433446, 9.078516]).addTo(map2);
}


document.addEventListener('DOMContentLoaded', initMap);
