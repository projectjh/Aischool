import BlogItem from "./BlogItem";

const BlogList = ({articles}) => {
    const newarticles = articles;

    return (
        <div className="BlogList">
            {newarticles && newarticles.map(article => (<BlogItem key={article.link} article={article} />))}
        </div>
    );
};

export default BlogList;