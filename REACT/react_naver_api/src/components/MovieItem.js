import '../css/MovieItem.scss';

const MovieItem = ({article}) => {
    const {title, link, image, director, actor, userRating} = article;

    const newTitle = title.replace(/<b>/g, '').replace(/<\/b>/g,'');
    const newDirector = director.replace(/\|/g, '');
    const newActor = actor.replace(/\|/g, ', ');
   
    
    return (
        <div>
            <div className="thumbnail">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="thumbnail"/>
                </a>
            </div>
            <div className="contents">
                <h3>{newTitle}</h3>
                <p>{newDirector}</p>
                <p>{newActor}</p>
                <p>{userRating}</p>
            </div>
        </div>
    );    
}

export default MovieItem;