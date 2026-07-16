/**
 * OpenTimeClock Dashboard
 */


let employee;



window.onload = function(){


    employee =
        getEmployee();


    if(!employee){


        window.location.href =
        "index.html";


        return;


    }



    document
    .getElementById("employeeName")
    .innerHTML =

    "Welcome " +

    employee.Name;



    loadStatus();


};





async function loadStatus(){


    const result =

    await callAPI(

        "status",

        {

            phone:
            employee.Phone

        }

    );



    document
    .getElementById("status")
    .innerHTML =

    result.status;



    if(result.status=="IN"){


        document
        .getElementById("punchButton")
        .innerHTML =

        "PUNCH OUT";


    }

    else{


        document
        .getElementById("punchButton")
        .innerHTML =

        "PUNCH IN";


    }


}






async function punch() {

    try {

        const location = await getLocation();

        document.getElementById("location").innerHTML =
            location.latitude.toFixed(6) +
            ", " +
            location.longitude.toFixed(6) +
            "<br>Accuracy: " +
            Math.round(location.accuracy) +
            " meters";

        const result = await callAPI(
            "punch",
            {
                phone: employee.Phone,
                latitude: location.latitude,
                longitude: location.longitude,
                accuracy: location.accuracy,
                device: navigator.userAgent
            }
        );

        if (result.success) {

            loadStatus();

        } else {

            alert(result.error);

        }

    } catch (error) {

        alert("Punch failed:\n\n" + error);

        console.error(error);

    }

}