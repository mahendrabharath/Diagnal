import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { setMovieList, advancePage } from '../actions';
import MovieCard from './MovieCard';

const MovieList = props => {
  const { movieList, searchResults, page } = props.state;
  let bottomBoundaryRef = useRef(null);
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    console.log('Fetch Page ', page)
    page != 0 && getData()
  }, [page])

  const scrollObserver = useCallback(node => {
    new IntersectionObserver(entries => {
      console.log("IntersectionObserver entry ", entries)
      entries.forEach(en => {
        if (en.intersectionRatio > 0) {
          console.log('Page bottom reached', props.state.page)
          props.advancePage();
        }
        if (en.intersectionRatio == 0 && reachedBottom) {
          setReachedBottom(false)
        }
      });
    }).observe(node);
  }, [advancePage])

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);



  const getData = async () => {
    debugger
    try {
      const response = await fetch(`/assets/json/CONTENTLISTINGPAGE-PAGE${page}.json`);
      const data = await response.json();
      props.setMovieList(data);
    } catch (err) {
      console.log(err);
      setReachedBottom(true)
    }
  }

  const renderMovieList = searchResults;

  return <div>

    <img className="w-full h-35/100" src="/assets/images/nav_bar.png" />

    <div className='grid gap-4 grid-cols-3'>
      {renderMovieList.map((el, i) => <MovieCard key={i} name={el.name} posterImageName={el['poster-image']} />)}
    </div>
    {reachedBottom && <div className={"w-full text-center text-yellow-300 animate-bounce"}>
      {searchResults.length == 0 ? 'No Results found' : 'Reached the bottom'}
    </div>}
    <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
  </div>;
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  setMovieList: data => dispatch(setMovieList(data)),
  advancePage: data => dispatch(advancePage(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);