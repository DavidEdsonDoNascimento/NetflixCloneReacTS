import React, { useEffect, useState } from 'react';
import MovieAPI from './MovieAPI.service';
import MovieSection from './components/MovieSection.component';
import './App.css';

export const App = () => {

  const [movieList, setMovieList] = useState([{
    title: '',
    items: {}
  }]);

  async function loadAllMovies() {
    let movies = await MovieAPI.getHomeList();
    setMovieList(movies);
  };

  useEffect(() => {
    loadAllMovies();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map(({ title, items }, key) => {
          return <MovieSection key={key} title={title} items={items} slugs="" />
        })}
      </section>
    </div>
  );
}