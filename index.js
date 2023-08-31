const axios = require('axios');
require('dotenv').config();

axios.get('https://api.wmata.com/StationPrediction.svc/json/GetPrediction/C05', {headers: {api_key: process.env.API_KEY}})
    .then(res => {
        // console.log(res.data['Trains'])
        let trains = res.data.Trains.filter( (train) => { return train.DestinationCode === "D13" || train.DestinationCode === "G05" })
        console.log(trains)
    })
    .catch(err => console.log(err))