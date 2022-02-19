import { combineReducers } from 'redux';

const weatherReducer = (torontoWeather={}, action) => {
    switch (action.type) {
        case "GET_TOR_WEATHER":
            return action.payload.data

        default:
            return torontoWeather;
    }
};

export default combineReducers({
    weatherData: weatherReducer
});