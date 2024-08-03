 
// import { createAction } from '@reduxjs/toolkit';

// export const fetchCoinListSuccess = createAction('FETCH_COIN_LIST_SUCCESS');
// export const fetchCoinListFailure = createAction('FETCH_COIN_LIST_FAILURE');

// export const fetchCoinList = () => async (dispatch) => {
//     try {
//         const response = await fetch('https://api.livecoinwatch.com/coins/list', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-api-key': '0beda87c-677f-4ab0-a78f-022f2a365ba6'  // Replace with your actual API key
//             },
//             body: JSON.stringify({
//                 currency: 'USD',
//                 sort: 'rank',
//                 order: 'ascending',
//                 offset: 0,
//                 limit: 50,
//                 meta: false
//             })
//         });

//         const data = await response.json();
//         console.log('Response:', data);  // Log response for debugging
//         dispatch(fetchCoinListSuccess(data));
//     } catch (error) {
//         console.error('Error:', error);  // Log error for debugging
//         dispatch(fetchCoinListFailure(error.message));
//     }
// };

import { createAction } from '@reduxjs/toolkit';

export const fetchCoinListSuccess = createAction('FETCH_COIN_LIST_SUCCESS');
export const fetchCoinListFailure = createAction('FETCH_COIN_LIST_FAILURE');

export const fetchCoinList = (limit = 5) => async (dispatch) => {
    try {
        const response = await fetch('https://api.livecoinwatch.com/coins/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '0beda87c-677f-4ab0-a78f-022f2a365ba6'  // Replace with your actual API key
            },
            body: JSON.stringify({
                currency: 'USD',
                sort: 'rank',
                order: 'ascending',
                offset: 0,
                limit: limit,
                meta: false
            })
        });

        const data = await response.json();
        console.log('Response:', data);  // Log response for debugging
        dispatch(fetchCoinListSuccess(data));
    } catch (error) {
        console.error('Error:', error);  // Log error for debugging
        dispatch(fetchCoinListFailure(error.message));
    }
};
