import React, { useState } from "react";
import Pagination from "react-js-pagination";

// react-js-pagination패키지
const Paging = ({page, articleCnt, setPage, handlePage}) => {
    // const [page, setPage] = useState(1);

    // const handlePage = (page) => {
    //     setPage(page);
    // };
    console.log('Paging page', page, articleCnt);

    // const handleChange = () => {
    //     setPage(page);
    //     handlePage();
    // }

    // const handlePage = () => {       
    //     setPage(page); 
    //     getList();
    //     console.log('handlePage=>', ); 
    // }; 
    
  
    

    return (
        <Pagination
            // id={page}
            activePage={page}
            itemCountPerPage={10}
            totalItemsCount={articleCnt}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={setPage}
            // onChange={handleChange}
            onClick={handlePage}
        />
    );
}

export default Paging;