import React, {useEffect, useState} from "react";
import Dropdown from "../Dropdown";
import PropTypes from "prop-types";
const Bookshelf=({Key,Text,Value,Books,Categories,changeShelf})=>{
    const [shelfBooks,setShelfBooks] = useState([]);
    useEffect(()=>{
        let newshelfbooks = (Books.length) && Books.filter(book=>book.shelf === Value);
        setShelfBooks(newshelfbooks);
    },[Books,Value])
    return(
        <div className="bookshelf" key={Key}>
            <h2 className="bookshelf-title">{Text}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {shelfBooks.length >0 && shelfBooks.map((BookValue,BookKey)=>(
                        BookValue.shelf === Value &&(
                            <li key={BookKey}>

                                <div className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage:
                                                    `url(${(BookValue.imageLinks && BookValue.imageLinks.smallThumbnail) ? BookValue.imageLinks.smallThumbnail: 'https://i.ibb.co/bWCxvHd/NoImage.png'})`,

                                            }}
                                        ></div>
                                        <Dropdown Categories={Categories} Value={BookValue.shelf} changeShelf={changeShelf} BookValue={BookValue}/>
                                    </div>
                                    <div className="book-title">{BookValue.title}</div>
                                    <div className="book-authors">{BookValue.authors && BookValue.authors.toString()}</div>
                                </div>
                            </li>
                        )
                    ))}
                </ol>
                {shelfBooks.length === 0 &&
                <div className="alert alert-warning" role="alert">
                    No Books in this shelf
                </div>
                }

            </div>

        </div>

    )
}
Bookshelf.propTypes = {
    Key: PropTypes.number.isRequired,
    Text:PropTypes.string.isRequired,
    Value:PropTypes.string.isRequired,
    Books:PropTypes.array.isRequired,
    Categories:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired
}
export default Bookshelf;