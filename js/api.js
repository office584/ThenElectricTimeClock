/**
 * OpenTimeClock API Module
 *
 * Handles communication with
 * the Google Apps Script backend.
 */


const API_URL =
"https://script.google.com/macros/s/AKfycbzI2fTvZNcTtRU_g-P06lEvEEa3tvONCJaGHzKVR9s1Dj7VqI2cICE9tA4JdjCyEgCu/exec";



async function callAPI(action, data = {}) {


    const request = {

        action: action,

        ...data

    };


    const response = await fetch(

        API_URL,

        {

            method:"POST",

            headers:{

                "Content-Type":"text/plain"

            },

            body:

            JSON.stringify(request)

        }

    );


    return await response.json();

}