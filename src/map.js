// Set up map
var map = L.map('map').setView([40, -98], 4); // Center roughly on the US

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Get routing directions
var routingControl = L.Routing.control({
    waypoints: [
        L.latLng(43.6187102, -116.2146068), // Boise, ID
        L.latLng(37.2295733, -80.4139393)  // Blacksburg, VA
    ],
    routeWhileDragging: false // Don't update route constantly while moving markers
}).addTo(map);

// Animate a marker along the route
function animateMarker() {
    const routeLine = routingControl.getPlan().getWaypoints()[0].latLngs;
    let marker = L.marker(routeLine[0]).addTo(map);

    const tween = new TWEEN.Tween({ index: 0 })
        .to({ index: routeLine.length - 1 }, 5000) // 5 sec animation
        .onUpdate(function() {
            let pos = routeLine[this.index];
            marker.setLatLng(pos);
            map.panTo(pos); // Keep map centered on marker
        })
        .easing(TWEEN.Easing.Linear.None)
        .start();
}

// Start animation (you might want to trigger this on a button click)
animateMarker();
