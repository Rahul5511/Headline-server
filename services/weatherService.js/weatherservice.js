const axios = require('axios')

const fetchWeatherData =async () => {
   try{
     const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=9d5055f4eae34da19f594239240202&q=bhubaneswar&aqi=no')
     return response.data;
   }catch(error){
    console.error("Error fetching weather data",error)
    throw error;
   }
}

module.exports = fetchWeatherData;