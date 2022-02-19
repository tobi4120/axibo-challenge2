import { combineReducers } from 'redux';

const weatherReducer = (current_user={}, action) => {
    switch (action.type) {
        case "GET_USER_INFO":
            return action.payload.data

        default:
            return current_user;
    }
};

export default combineReducers({
    weatherData: weatherReducer
});