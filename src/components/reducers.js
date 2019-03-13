// import { PRECINCT_SELECTED, NEIGHBORHOOD_SELECTED, DISPLAY_RESET } from '../actions/types';

const initialState = {
    display: 'precincts',
    precinct: 'East',
    neighborhood: ''
}

export default function(state = initialState, action) {
    const { type } = action;

    switch(type){

    case 'PRECINCT_SELECTED':
    return {
        ...state,
        display: 'neighborhoods',
        precinct: 'West'
    }
        
    case 'NEIGHBORHOOD_SELECTED':
    return{
        ...state,
        neighborhood: 'East Lake'
    }

    case 'DISPLAY_RESET':
    return{
        ...state,
        display: 'precincts',
    }
    default:
            return state;
}

    }