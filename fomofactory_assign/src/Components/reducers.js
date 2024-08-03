// const initialState = {
//     prices: [],
//     error: null
// };

// const priceReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FETCH_PRICES_SUCCESS':
//             return {
//                 ...state,
//                 prices: action.payload,
//                 error: null
//             };
//         case 'FETCH_PRICES_FAILURE':
//             return {
//                 ...state,
//                 error: action.payload
//             };
//         default:
//             return state;
//     }
// };

// export default priceReducer;

// reducer.js
// const initialState = {
//     prices: [],
//     error: null
// };

// const priceReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FETCH_PRICES_SUCCESS':
//             return {
//                 ...state,
//                 prices: action.payload
//             };
//         case 'FETCH_PRICES_FAILURE':
//             return {
//                 ...state,
//                 error: action.payload
//             };
//         default:
//             return state;
//     }
// };

// export default priceReducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { fetchCoinListSuccess, fetchCoinListFailure } from './action';

// const initialState = {
//     coinList: [],
//     error: null,
// };

// const coinReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(fetchCoinListSuccess, (state, action) => {
//             state.coinList = action.payload;
//             state.error = null;
//         })
//         .addCase(fetchCoinListFailure, (state, action) => {
//             state.coinList = [];
//             state.error = action.payload;
//         });
// });

// export default coinReducer;

import { createReducer } from '@reduxjs/toolkit';
import { fetchCoinListSuccess, fetchCoinListFailure } from './action';

const initialState = {
    coinList: [],
    error: null,
};

const coinReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCoinListSuccess, (state, action) => {
            state.coinList = action.payload;
            state.error = null;
        })
        .addCase(fetchCoinListFailure, (state, action) => {
            state.coinList = [];
            state.error = action.payload;
        });
});

export default coinReducer;
