import {
    TOPREPO_FETCH_REQUESTED,
    TOPREPO_FETCH_SUCCEEDED,
    TOPREPO_FETCH_FAILED,
} from '../constants/actionTypes';

const initialState = {
    fetching: false,
    error: false,
    errorMessage: null,
    repos: null
};

const topReposReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOPREPO_FETCH_REQUESTED:
            return {
                ...state,
                fetching: true,
                error: false,
                errorMessage: null,
                repos: null
            };

        case TOPREPO_FETCH_SUCCEEDED:
            return {
                ...state,
                fetching: false,
                error: false,
                errorMessage: null,
                repos: action.payload
            };
        case TOPREPO_FETCH_FAILED:
            return {
                ...state,
                fetching: false,
                error: true,
                errorMessage: action.payload,
                repos: null
            };

        default:
            return state;
    }
};
export default topReposReducer;
