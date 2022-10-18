import { useCallback, useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import BlogList from './BlogList';
import ShopList from './ShopList';
import '../css/Search.scss';
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {    
    const [search, setSearch] = useState('');
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('');

    const onChange = useCallback(e => {
        setSearch(e.target.value);
        // console.log(e.target.value);
    },[]);

    const ChangeCategory = e => {
        setCategory(e.target.value);
        // console.log(e.target.value);
    };

    const onClick = useCallback( e => {
        const NAVER_CLIENT_ID = "NOt2yyw4Gn6Y5gvyBB8T";
        const NAVER_CLIENT_SECRET = "unzLll0HB9";

        console.log(category);
        console.log(search);
        
        const fetchData = async () => {
            setLoading(true);

            try {
                // const response = await axios.get(`/v1/search/${category}?query=${search}`, {
                const response = await axios.get(`/v1/search/shop`, {
                    params: {
                        // query: "마블"
                        query: {search},
                    },
                    headers: {
                        "X-Naver-Client-Id": NAVER_CLIENT_ID,
                        "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
                    },
                });
                setArticles(response.data.items);
                // setCategory('');
                setSearch('');
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
        // setCategory('');

        if(loading) {
            return <p>불러오는중</p>;
        }

        if(!articles) {
            return null;
        }

        // setSearch('');
        // setCategory('');
    },[search]);

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    // console.log(search);
    // console.log(category);

    return (
        <div className="Search">
            <div className="section">
                <div className="search-wrap">
                    <input type="text" name="search" value={search} onChange={onChange} onKeyPress={onKeyPress} placeholder="검색어를 입력해주세요." />
                    <button onClick={onClick}><RiSearch2Line /></button>
                    {/* {articles.map(article => (<MovieList key={article.link} article={article} />))} */}
                </div>
                <div className="btn-wrap">
                    {/* <button value="blog" onClick={ChangeCategory}>블로그</button>
                    <button value="movie" onClick={ChangeCategory}>영화</button> */}
                    {/* <button value="image" onClick={ChangeCategory}>이미지</button>
                    <button value="kin" onClick={ChangeCategory}>지식인</button>
                    <button value="news" onClick={ChangeCategory}>뉴스</button>
                    <button value="shop" onClick={ChangeCategory}>쇼핑몰</button> */}
                </div>

                
                {/* {category === 'blog' && <BlogList articles={articles} />}
                {category === 'movie' && <MovieList articles={articles} />} */}
            </div>
        </div>
    );

};

export default Search;