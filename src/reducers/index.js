import { ADVANCE_PAGE, SEARCH_MOVIES, SET_MOVIE_LIST } from "../actionTypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
    const preState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case SET_MOVIE_LIST: {
            const newMoviewList = [...preState.movieList, ...action.payload.page["content-items"].content];
            preState.movieList = [...newMoviewList]
            preState.searchResults = [...newMoviewList]
            return {
                ...state, ...preState
            };
        };

        case SEARCH_MOVIES: {
            let { searchQuery } = action.payload;
            searchQuery = searchQuery.replaceAll('\\', '');
            if (searchQuery.length == 0) return { ...state, searchResults: [...state.movieList] };

            const searchRegEx = new RegExp(searchQuery, 'ig')
            const searchResults = state.movieList.filter(el => searchRegEx.test(el.name));
            return { ...state, searchResults }
        }

        case ADVANCE_PAGE: {
            ++preState.page;
            return {...state, ...preState};
        }
        default: return { ...state };
    }
}

export default reducer