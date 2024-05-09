import { Loader } from "@googlemaps/js-api-loader";

function Map(map) {
    const loader = new Loader({
        apiKey: "NEXT_PUBLIC_MAPS_API_KEY",
        version: "weekly",
      });
      
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
      
        map = new Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      });
}

export default Map;



