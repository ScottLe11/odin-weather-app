import './style.css';
console.log("Working")

const api_key = "6HP895ABJ4PZEBUJP8MTVPAMC";


async function getWeatherData(location){

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${api_key}`);
        const data = await response.json();
        if (!data){
            return null;
        }
        return data;
    
    }

    catch (err){
        console.error("Fetch failed:", err);
        return null;
    }
    // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${api_key}`)
    //     .then(function(response){
    //         console.log("correct_key");
    //         return response.json();
    //     })
    //     .then(function(data){
    //         console.log(data.address);
    //         console.log(data.days[0].tempmax);
    //     })
    //     .catch(function(err){
    //         console.log("err");
    //     })


}

function get_temp(data){
    if (!data){
        return null;

    } 
    console.log(data.address);
    console.log(data.days[0].tempmax);

}

function get_rain(data){
    if (!data){
        return null;

    }
    console.log(data.days[0].precip) 
}

function get_wind_speed(data){
    if (!data){
        return null;

    } 
    console.log(data.days[0].windspeed)
}

const form = document.querySelector("form");

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const city = formData.get('city');
    let raw_data = await getWeatherData(city);
    get_temp(raw_data);
    get_rain(raw_data);
    get_wind_speed(raw_data);
})

// let answer = prompt("yes/no");
// if (answer == "y"){
//     let location  = prompt("Enter location");
//     let raw_data = await getWeatherData(location);
//     get_temp(raw_data);
// }
