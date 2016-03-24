import { combineReducers } from 'redux';
import {reduceReducers} from "utils/utils"
import counter from './counter';


/**
 * combineReducers is important to understand. As your app might grow in size
 * and complexity, you will likely begin to split your reducers into separate
 * functions - with each one managing a separate slice of the state! This helper
 * function from 'redux' simply merges the reducers.
 *
 * If you're transitioning from Flux, you will notice we only use one store, but
 * instead of relying on multiple stores to manage diff parts of the state, we use
 * various reducers and combine them.
 *
 * More info: http://rackt.org/redux/docs/api/combineReducers.html
 */


const combinedReducer = combineReducers({
    counter
});

let globalReducer = (state, action) => {
    switch (action.type) {
        // Handle some action that requires access to all pieces of the state at once
        default : return state;
    }
}

let rootReducer = reduceReducers(combinedReducer, globalReducer);


export default rootReducer;