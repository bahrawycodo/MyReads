import  {useState} from "react";
import PropTypes from "prop-types";
const Form=({onchangeResult})=>{
    const [search,setSearch]=useState("");
    const changeResult=(value)=>{setSearch(value);onchangeResult(value);}
    return(
        <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={search}
                onChange={(e)=>changeResult(e.target.value)}
            />
        </div>

    )
}
Form.propTypes = {
    onchangeResult:PropTypes.func.isRequired
}
export default Form;