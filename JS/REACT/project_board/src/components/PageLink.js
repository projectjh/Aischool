import React from 'react';

const PageLink = ({page, handlePage}) => {
    

    return (
        <li>
            <a href="#" id={page} onClick={handlePage}>{page}</a>
        </li>
    );
};

export default PageLink;