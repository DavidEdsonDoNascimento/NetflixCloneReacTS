import './FeaturedMovie.css';

export default ({ item }: any) => (
    <section className="featured" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
        <h1>{item.original_name}</h1>
    </section>
);