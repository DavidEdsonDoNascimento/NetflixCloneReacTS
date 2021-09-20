import React, { useEffect, useState } from 'react';
import MovieAPI from './MovieAPI.service';
import MovieSection from './components/MovieSection/MovieSection.component';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie.component';

import './App.css';

export const App = () => {

  const [movieList, setMovieList] = useState([{
    title: '',
    items: {}
  }]);

  const [featuredData, setFeaturedData] = useState(null);

  async function loadAllMovies() {

    let movies = await MovieAPI.getHomeList();

    setMovieList(movies);

    const originals = movies?.filter(item => item.slugs === 'originals')?.shift()?.items;
    const { results } = originals;

    if (results) {
      const originalRandom = results[Math.floor(Math.random() * results.length - 1)];
      const featured = await MovieAPI.getMovieInfo(originalRandom.id, 'tv');
      console.log(featured);
      setFeaturedData(featured);
    }
  };

  useEffect(() => {
    loadAllMovies();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map(({ title, items }, key) => {
          return <MovieSection key={key} title={title} items={items} slugs="" />
        })}
      </section>
    </div>
  );
}