import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import MovieItem from "./MovieItem";
import "../css/MovieList.scss";

const MovieList = ({articles}) => {
    const newarticles = articles;

    return (
        <div className="MovieList">
            {newarticles && newarticles.map(article => (<MovieItem key={article.link} article={article} />))}
        </div>
    );
};

export default MovieList;