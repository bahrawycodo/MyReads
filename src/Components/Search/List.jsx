import React from "react";
import PropTypes  from "prop-types";
import Dropdown from "../Dropdown";
const List=({Categories,Results,changeShelf,Books})=>{

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {Array.isArray(Results) && Results.length > 0 &&  Results.map((BookValue,BookKey)=> {

                            let getindex = Books.findIndex((obj => obj.id === BookValue.id)) ;
                            let BookValueshelf = (getindex === -1) ? 'none' : Books[getindex].shelf;

                        return(
                        <li key={BookKey}>
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage:
                                                `url(${(BookValue.imageLinks && BookValue.imageLinks.smallThumbnail) ? BookValue.imageLinks.smallThumbnail : 'https://i.ibb.co/bWCxvHd/NoImage.png'})`,

                                        }}
                                    ></div>
                                    <Dropdown Categories={Categories} Value={BookValueshelf} BookValue={BookValue}
                                              changeShelf={changeShelf}/>
                                </div>
                                <div className="book-title">{BookValue.title}</div>
                                <div className="book-authors">{BookValue.authors && BookValue.authors.toString()}</div>
                            </div>
                        </li>
                        )
                    }
                )}

            </ol>
            {Array.isArray(Results) && Results.length === 0 &&
            <div className="alert alert-danger" role="alert">
                No Search Results
            </div>
            }
        </div>
    )
}
List.propTypes = {
    Categories: PropTypes.array.isRequired,
    Results:PropTypes.array.isRequired,
    Books:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired
}

export default List