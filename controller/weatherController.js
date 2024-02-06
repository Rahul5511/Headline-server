const axios = require('axios');
const fetchWeatherData = require('../services/weatherService.js/weatherservice');

 const weatherForecast =async (req,res) => {
   try{
     const data = await fetchWeatherData();
     if(data) {
      res.status(200).send(data);
     }else{
      res.send("No Data Found")
     }
   }catch(error){
      console.log(error)
      res.status(500).send("Internal Server Error")
   }
}

module.exports = weatherForecast;