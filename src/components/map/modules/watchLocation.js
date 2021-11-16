export let long;
export let lat;
const watchLocation = () => {
    const error = (err) => {
        console.log(err)
    };
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((pos) => {
            lat = pos.coords.latitude;
            long = pos.coords.longitude;
            // console.log(pos.coords);
        }, error, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    }
    else {
        alert('please allow GOMAP to access to your location');
    }
}
watchLocation();