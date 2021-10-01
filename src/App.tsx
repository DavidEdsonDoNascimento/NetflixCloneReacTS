import { useEffect, useState } from 'react';
import MovieAPI from './services/MovieAPI.service';
import MovieSection from './components/MovieSection';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

export const App = () => {

  const [movieList, setMovieList] = useState([{
    title: '',
    items: {}
  }]);

  const [featuredData, setFeaturedData] = useState(null);
  const [backHeader, setBlackHeader] = useState(false);

  async function loadAllMovies() {

    let movies = await MovieAPI.getHomeList();

    setMovieList(movies);

    const originals = movies?.filter(item => item.slugs === 'originals')?.shift()?.items;
    const { results } = originals;

    if (results) {
      const originalRandom = results[Math.floor(Math.random() * results.length - 1)];
      if(!originalRandom?.id){
        return;
      }
      const featured = await MovieAPI.getMovieInfo(originalRandom?.id, 'tv');
      setFeaturedData(featured);
    }
  };

  async function observePageScroll() {
    setBlackHeader(window.scrollY > 10);
  }

  async function toggleEventPageScroll() {
    window.addEventListener('scroll', observePageScroll);

    return () => {
      window.removeEventListener('scroll', observePageScroll);
    }
  }
  useEffect(() => {
    loadAllMovies();
    toggleEventPageScroll();
  }, []);

  return (
    <div className="page">
      <Header black={backHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map(({ title, items }, key) => {
          return <MovieSection key={key} title={title} items={items} slugs="" />
        })}
      </section>
      <Footer />
    </div>
  );
}