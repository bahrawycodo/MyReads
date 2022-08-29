import "./App.css";
import { useState } from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import {getAll, update} from "./BooksAPI";
function App() {
const Categories = [
    {Text:"Currently Reading",Value:"currentlyReading"},
    {Text:"Want to Read",Value:"wantToRead"},
    {Text:"Read",Value:"read"}
];
const [Books,setBooks] =useState([]);
    const getBooks = async ()=>{
        const res = await getAll();
        setBooks(res);
    }

const changeShelf=(changer,object)=>{
    object.shelf  =changer;
    let newBooks = (Books.findIndex((obj => obj.id === object.id)) === -1 ) ?   Books : Books.filter(book => book.id !== object.id) ;
    let thenewbooks = newBooks.concat(object);
    setBooks(thenewbooks);
    updateShelf(object,changer);
}
    const updateShelf = async (object,changer)=>{
        return  await update(object,changer);
    }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home Categories={Categories} getAllBooks={getBooks} Books={Books} changeShelf={changeShelf}/>} />
        <Route  path="/Search" element={<Search Categories={Categories} changeShelf={changeShelf} getAllBooks={getBooks} Books={Books}/>} />

      </Routes>
    </div>
  );
}

export default App;
