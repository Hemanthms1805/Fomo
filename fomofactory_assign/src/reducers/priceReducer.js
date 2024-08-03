// reducers/priceReducer.js
const initialState = [];

const priceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRICES_SUCCESS':
            return action.payload;
        case 'FETCH_PRICES_FAILURE':
            return state;
        default:
            return state;
    }
};

export default priceReducer;
