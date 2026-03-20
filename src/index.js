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
    //console.log(data.address);
    //console.log(data.days[0].tempmax);
    const temp = data.days[0].tempmax;
    const newRes = document.createElement('p');
    newRes.textContent = `Current Temp: ${temp}`;
    resultContainer.appendChild(newRes);
    

}

function get_rain(data){
    if (!data){
        return null;

    }
    //console.log(data.days[0].precip)
    const rain = data.days[0].precip;
    const newRes = document.createElement('p');
    newRes.textContent = `Current Rain levels: ${rain}`;
    resultContainer.appendChild(newRes);
}

function get_wind_speed(data){
    if (!data){
        return null;

    } 
    //console.log(data.days[0].windspeed)
    const wind = data.days[0].windspeed;
    const newRes = document.createElement('p');
    newRes.textContent = `Current wind speeds: ${wind}`;
    resultContainer.appendChild(newRes);
}


const form = document.querySelector("form");
const formContainer = document.getElementById("form-content");
const resultContainer = document.getElementById("result-content");


form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const city = formData.get('city');
    let raw_data = await getWeatherData(city);
    const newRes = document.createElement('p');
    newRes.textContent = `Current city: ${city}`;
    resultContainer.appendChild(newRes);
    formContainer.style.display = "none";
    resultContainer.style.display = "block";
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
