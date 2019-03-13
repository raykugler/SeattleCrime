// import { PRECINCT_SELECTED,NEIGHBORHOOD_SELECTED, DISPLAY_RESET } from './Reducers';



export const changeDisplay = () => {
    return {type: 'DISPLAY_RESET'
};
}

export const selectedPrecinct = (newTest) => {
    return {type: 'PRECINCT_SELECTED'
    };
}

export const selectedNeighborhood = () => {
    return {type: 'NEIGHBORHOOD_SELECTED'
};
}