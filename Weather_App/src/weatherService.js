const API_KEY = 'd0362a7c4a0a7860c8116a1a641db70e';

const makeIconURL = (iconId )=> `https://openweathermap.org/img/wn/${iconId}@2x.png`


const getFormattedWeatherData = async(city,units = 'metric') =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    const {weather, 
        main:{temp, feels_like, temp_min,temp_max, pressure, humidity},
        wind:{speed},
        sys:{country},name,
    } = data;

    const { description, icon} = weather[0];
    return{
        temp,
        description,
        iconURL: makeIconURL(icon), 
        feels_like, 
        temp_min, 
        temp_max, 
        humidity, 
        speed, 
        pressure, 
        country, 
        name,
    };
}

export {getFormattedWeatherData}; 