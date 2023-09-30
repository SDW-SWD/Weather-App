
'use strict';
const api_key ="f633a26445fd2c29bab32689495d8944";

    /**
     *
     * @param {string} URL
     * @param {Function} callback
     */



export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res =>res.json())
        .then(data =>callback(data));
}

export const url ={
    currentWeather(lan, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&Units=metric`
    },
    airPollution(lat, lon){
        `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },

    reverseGe0(lat,lon){`http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    /**
     *
     * @param {string} query
     */
    geo(query){
        return`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}
