const BlogItem = ({article}) => {
    const {title, link, description} = article;

    const newTitle = title.replace(/<b>/g, '').replace(/<\/b>/g,'');
   
    
    return (
        <div>
            <div className="contents">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h3>{newTitle}</h3>
                    <p>{description}</p>
                </a>
            </div>
        </div>
    );    
}

export default BlogItem;