import React, {useEffect} from "react";
import Title from "./Title";
import {Link} from "react-router-dom";
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";
const Home=({Categories,Books,getAllBooks,changeShelf})=>{

    useEffect(()=>{
        getAllBooks();
    },[])
    return(
        <div className="list-books">
            <Title title="MyReads"/>
            <div className="list-books-content">
                <div>
                    {Object.values(Categories).map((value,key)=>(
                        <Bookshelf key={key} Key={key} Text={value.Text} Value={value.Value} Books={Books} Categories={Categories} changeShelf={changeShelf}/>
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to="/Search">Add a book</Link>
            </div>
        </div>

    )
}
Home.propTypes = {
    Categories: PropTypes.array.isRequired,
    Books:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired,
    getAllBooks:PropTypes.func.isRequired

}

export default Home;