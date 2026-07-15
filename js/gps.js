/**
 * GPS utilities
 */


function getLocation(){


    return new Promise(

        function(resolve,reject){


            if(!navigator.geolocation){


                reject(
                    "GPS not supported"
                );


                return;

            }



            navigator.geolocation.getCurrentPosition(

                function(position){


                    resolve({

                        latitude:
                        position.coords.latitude,


                        longitude:
                        position.coords.longitude,


                        accuracy:
                        position.coords.accuracy


                    });


                },


                function(error){


                    reject(
                        error.message
                    );


                },


                {

                    enableHighAccuracy:true,

                    timeout:10000,

                    maximumAge:0

                }


            );


        }

    );

}