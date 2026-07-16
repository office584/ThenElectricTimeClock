/**
 * GPS utilities
 */


function getLocation() {

    return new Promise((resolve, reject) => {

        if (!navigator.geolocation) {
            reject("Geolocation is not supported by this browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(

            (position) => {

                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                });

            },

            (error) => {

                let message;

                switch (error.code) {

                    case error.PERMISSION_DENIED:
                        message = "PERMISSION_DENIED";
                        break;

                    case error.POSITION_UNAVAILABLE:
                        message = "POSITION_UNAVAILABLE";
                        break;

                    case error.TIMEOUT:
                        message = "TIMEOUT";
                        break;

                    default:
                        message = error.message;
                }

                reject(message);

            },

            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0
            }

        );

    });

}