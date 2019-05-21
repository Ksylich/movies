import React from 'react';


import './movie-card-item.css';

const MovieCardItem = ({ movie , idx}) => {
    const { title, poster_path } = movie;

    const style = `crd crd-${idx}`;


    return (
        <div className={style} data-title={title}>
            <img src={poster_path}
                alt="" className="card-img-top" />
        </div>
    );
};

export default MovieCardItem;