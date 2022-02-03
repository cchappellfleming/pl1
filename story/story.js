function initialize() {
    const glacier = { lat: 63.5708, lng: -19.2924 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: glacier,
      zoom: 10,
    });

    const path = {lat: 63.498410145945954, lng: -19.397552790404397}
    path = new google.maps.StreetViewPanorama(
      document.getElementById("path"),
      {
        position: path,
        pov: {
          heading: 0,
          pitch: 0,
        },
      }
    );
  
    map.setStreetView(panorama);
  }
  