function initMap() {

    const map = L.map("cu-map").setView([50.43677908882997, 8.082781696612395], 15.5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // L.marker([50.433902, 8.079086]).addTo(map);
    L.marker([50.43677908882997, 8.082781696612395]).addTo(map);
}


document.addEventListener('DOMContentLoaded', initMap);
