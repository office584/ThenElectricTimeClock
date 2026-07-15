/**
 * OpenTimeClock Storage
 *
 * Stores login information locally
 * on the device.
 */


function saveEmployee(employee){

    localStorage.setItem(

        "employee",

        JSON.stringify(employee)

    );

}



function getEmployee(){

    const data =
        localStorage.getItem(
            "employee"
        );


    if(!data){

        return null;

    }


    return JSON.parse(data);

}



function clearEmployee(){

    localStorage.removeItem(
        "employee"
    );

}