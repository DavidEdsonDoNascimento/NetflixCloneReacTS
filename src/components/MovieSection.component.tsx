import './MovieSection.css';
import Movie from './../interfaces/Movie';

export default ({ slugs, title, items }: Movie) =>
(<ul>
    <li>{title}</li>
    <div className="movieSection--rowlist">
        {//items?.results?.map((item, key) => {
            // return <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
            //})
        }
    </div>
</ul>);