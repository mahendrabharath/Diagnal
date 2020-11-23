import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';

const SearchComponent = props => {
    const [showSearchBar, setshowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const searchMoviesByText = query => {
        console.log('Query is ', query);
        props.searchMovies({ searchQuery: query });
        setSearchQuery(query);
    }

    return <div className={`grid grid-cols-${!showSearchBar ? 1 : '6 bg-black'} gap-4 `}>
                {!showSearchBar ? <img className="col-span-1 h-5/100 w-5/100 p-1" src='/assets/images/search.png' onClick={() => setshowSearchBar(!showSearchBar)} />
                : <img className="col-span-1 h-5/100 w-5/100 p-1" src='/assets/images/close.png' onClick={() => setshowSearchBar(!showSearchBar)} />}
                {showSearchBar &&
                    <input className="col-span-5 bg-transparent focus:outline-none border-b-2 text-white p-1"
                        placeholder='Search Movies'
                        onKeyUp={e => searchMoviesByText(e.target.value)}
                    />}
            </div>
}

const mapDispatchToProps = dispatch => ({
    searchMovies: data => dispatch(searchMovies(data))
})

export default connect(null, mapDispatchToProps)(SearchComponent);