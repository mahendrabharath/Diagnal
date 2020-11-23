import { ADVANCE_PAGE, SEARCH_MOVIES, SET_MOVIE_LIST } from "../actionTypes";

export const setMovieList = payload => ({type: SET_MOVIE_LIST, payload});

export const searchMovies = payload => ({type: SEARCH_MOVIES, payload});

export const advancePage = payload => ({type: ADVANCE_PAGE, payload});