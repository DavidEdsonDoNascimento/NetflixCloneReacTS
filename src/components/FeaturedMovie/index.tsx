import './FeaturedMovie.css';

const FeaturedMovie = ({ item }: any) => 
<section className="featured" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
    <div className="featured--gradient-v">
        <div className="featured--gradient-h">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
                <div className="featured--points">{item.vote_average} pontos</div>
                <div className="featured--year">{new Date(item.first_air_date).getFullYear()}</div>
                <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                <div className="featured--description">{item.overview}</div>
                <div className="featured--buttons-area">
                    <a href={`/watch/${item.id}`} className="featured--watch-btn">Assistir</a>
                    <a href={`/list/add/${item.id}`} className="featured--list-btn">+ Minha Lista</a>
                </div>
                <div className="featured--genres"><strong>Gêneros: </strong>{item.genres.map((g: any) => g.name).join(', ')}</div>
            </div>
        </div>
    </div>
</section>
export default FeaturedMovie;