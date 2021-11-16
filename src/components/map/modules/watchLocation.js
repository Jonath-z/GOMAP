export let lng;
export let lt;
const watchLocation = () => {
    const error = (err) => {
        console.log(err)
    };
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((pos) => {
            lt = pos.coords.latitude;
            lng = pos.coords.longitude;
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