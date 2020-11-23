import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';
import SearchComponent from './SearchComponent';

const NavBar = props => {
    const [showSearchBtn, setShowSearchBtn] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const searchMoviesByText = query => {
        console.log('Query is ', query);
        props.searchMovies({ searchQuery: query });
        setSearchQuery(query);
    }
//  grid grid-cols-3 gap-0
    return <div>
        <div className="fixed w-full">
            <img className="w-full h-40/100" src="/assets/images/nav_bar.png"/>
            <div className="absolute left-0 top-0">
                <img className="h-5/100 w-5/100 pl-4 pt-2" src='/assets/images/Back.png' onClick={() => setShowSearchBtn(!showSearchBtn)} />
            </div>
            <div className="absolute inset-top-center">
                <h3 className="text-white">Romantic Comedy</h3>
            </div>
            <div className="absolute right-0 top-0">
                <SearchComponent />
            </div>
        </div>
    </div>
}

const mapDispatchToProps = dispatch => ({
    searchMovies: data => dispatch(searchMovies(data))
})

export default connect(null, mapDispatchToProps)(NavBar);