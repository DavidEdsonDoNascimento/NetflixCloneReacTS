import './MovieSection.css';
import Movie from './../../interfaces/Movie';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useState } from 'react';

const FeaturedMovie = ({ slugs, title, items }: Movie) => {

    const DIMENSION_SCROLL_WIDTH = Math.round(window.innerWidth / 2);
    const LIST_WIDTH = items?.results?.length * 150;

    const [scrollX, setScrollX] = useState(0);
    
    const handleLeftArrow = () => {
        const x = scrollX + DIMENSION_SCROLL_WIDTH;
        setScrollX(x > 0 ? 0 : x);
    }
    
    const handleRightArrow = () => {
        
        const x = scrollX - DIMENSION_SCROLL_WIDTH;
        const limit = window.innerWidth - LIST_WIDTH;
        setScrollX(limit > x ? limit -60 : x);
    }

    return (
        <div className="movieSection">
            <h2>{title}</h2>
            <div className="movieSection--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon className="navigate-left" />
            </div>
            <div className="movieSection--right" onClick={handleRightArrow}>
                <NavigateNextIcon className="navigate-right"/>
            </div>
            <div className="movieSection--listarea">
                <div className="movieSection--list" style={{ 
                    marginLeft: scrollX, 
                    width: LIST_WIDTH
                }}>
                    {items?.results?.map((item: any, key: string) => {
                        return <div key={key} className="movieSection--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    })}
                </div>
            </div>
        </div>)
}

export default FeaturedMovie;