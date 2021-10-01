import './MovieSection.css';
import Movie from './../../interfaces/Movie';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ slugs, title, items }: Movie) =>
<div className="movieSection">
    <h2>{title}</h2>
    <div className="movieSection--left">
        <NavigateBeforeIcon className="navigate-left"/>
    </div>
    <div className="movieSection--right">
        <NavigateNextIcon className="navigate-right"/>
    </div>
    <div className="movieSection--listarea">
        <div className="movieSection--list">
            {items?.results?.map((item: any, key: string) => {
                return <div key={key} className="movieSection--item">
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                </div>
            })}
        </div>
    </div>
</div>