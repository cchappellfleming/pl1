let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 63.5708, lng: 19.2924},
    zoom: 15,
    mapTypeId: "satellite",
    heading: 90,
    tilt: 45,
  });
  // add listener to button
  document.getElementById("rotate").addEventListener("click", autoRotate);
}

function rotate90() {
  const heading = map.getHeading() || 0;

  map.setHeading(heading + 90);
}

function autoRotate() {
  // Determine if we're showing aerial imagery.
  if (map.getTilt() !== 0) {
    window.setInterval(rotate90, 3000);
  }
}