import React, {useEffect, useState} from "react";
import Form from "./Form";
import List from "./List";
import {Link} from "react-router-dom";
import {search} from "../../BooksAPI";
import PropTypes from "prop-types";

const Search=({Categories,changeShelf,Books,getAllBooks})=>{
    const [Results,setResults] =useState([]);

    const onchangeResult =(value)=>{
        const getSearch = async ()=>{
            const res = await search(value)
            setResults(res && !res.error ? res :[]);
        }
        getSearch();
    }
    useEffect(()=>{
        if(Books.length === 0) {getAllBooks()};
    },[Books,getAllBooks])
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>
                <Form onchangeResult={onchangeResult}/>
            </div>
            <List Categories={Categories} Results={Results} changeShelf={changeShelf} Books={Books} />
        </div>

    )
}
Search.propTypes = {
    Books:PropTypes.array.isRequired,
    Categories:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired,
    getAllBooks:PropTypes.func.isRequired
}
export default Search;