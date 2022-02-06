import React from 'react';
import './input-search.css';
import { BsSearch } from 'react-icons/bs';

const InputField = ({onChange, onClick, onKeyDown}) => {
    return<>
    <div className="search-box">
        <input 
            type="text"
            className="search-bar"
            placeholder="ex: Miami"
            onKeyDown={ onKeyDown }
            onChange={ onChange }>
        </input>
        <button className="search-btn" onClick={ onClick }><BsSearch /></button>
    </div>
    </>
}

export default InputField;