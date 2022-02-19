import axios from 'axios';

export const getWeatherData = () =>
    async (dispatch) => {
        const response = await axios.get("https://immense-bayou-41160.herokuapp.com/https://www.metaweather.com/api/location/4118/2021/08/08/",
            { mode:'cors' });
        //console.log(response);
        dispatch({ type: 'GET_TOR_WEATHER', payload: response });
    }