import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handlechange}) => {
    return (
        <input type="search" placeholder={placeholder} onChange={handlechange} className="search"/>
    );
}