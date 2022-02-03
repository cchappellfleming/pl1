function initialize() {
    const glacier = { lat: 63.5708, lng: -19.2924 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: glacier,
      zoom: 10,
    });
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: glacier,
        pov: {
          heading: 34,
          pitch: 10,
        },
      }
    );
  
    map.setStreetView(panorama);
  }
  