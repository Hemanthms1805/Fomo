// reducers/index.js
import { combineReducers } from 'redux';
import priceReducer from './priceReducer'; // Import your price reducer

const rootReducer = combineReducers({
    prices: priceReducer,
    // Add other reducers here as needed
});

export default rootReducer;
