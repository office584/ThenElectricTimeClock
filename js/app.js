/**
 * OpenTimeClock Application
 *
 * Main application logic.
 */


async function login(){


    const phone =
        document
        .getElementById("phone")
        .value;


    const pin =
        document
        .getElementById("pin")
        .value;



    const result =
        await callAPI(

            "login",

            {

                phone:phone,

                pin:pin

            }

        );



    const message =
        document.getElementById("message");



    if(result.success){


 saveEmployee(result.employee);


saveEmployee(result.employee);


window.location.href =
"dashboard.html";


    }

    else{


        message.innerHTML =

        result.error;


    }


}