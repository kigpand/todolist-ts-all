const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');

const location = [
    "Seoul",
    "Incheon",
    "Gangneung",
    "Gongju",
    "Daejeon",
    "Wonju",
    "Daegu",
    "Ulsan",
    "Busan",
    "Jeju City",
];

router.get('/weather',async (req, res)=>{
    const result = [];

    for(let i = 0; i<location.length;i++){
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location[i]}&appid=${process.env.WEATHER_API_KEY}`)
        .then((e)=>{
            result.push(e.data);
            if(i===location.length-1){
                res.json({ result: result });
            }
        });
    }
})

module.exports = router;