import { realTimeDB } from "./firebase";

let locations;
realTimeDB.ref('locations').on('value', (snapshot) => {
    if (snapshot.exists()) {
        locations = Object.values(snapshot.val());
    }
    else {
        locations = [];
    }
});

export const locationExist = (quarter, avenue, number, lat, long) => {
    console.log(quarter, avenue, number, lat, long);
    return (() => {
        if (locations.length > 0) {
            // console.log(locations.length);
            // console.log(locations);
            for (let i; i <= locations.length; i++) {
                if (quarter.toUpperCase() === locations[i].quarter.toUpperCase() && avenue.toUpperCase() === locations[i].avenue.toUpperCase() && number === locations[i].number) {
                    console.log(locations[i]);
                    return true;
                }
                if (lat === locations[i].lat && long === locations[i].long) {
                    return true;
                }
                if (quarter.toUpperCase() === locations[i].quarter.toUpperCase() && avenue.toUpperCase() === locations[i].avenue.toUpperCase() && number === locations[i].number && lat === locations[i].lat && long === locations[i].long) {
                    return true
                }
                else {
                    return false;
                }
            
            }
        }
        else if (locations.length === 0) {
            return false
    
        }
    });

            
}