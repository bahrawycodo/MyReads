import React from "react";
import PropTypes from "prop-types";
const Dropdown=({Categories,Value,changeShelf,BookValue})=>{

    return(
        <div className="book-shelf-changer">
            <select value={Value} onChange={(e)=>changeShelf(e.target.value,BookValue)}>
                <option value="0" disabled>
                    Move to...
                </option>
                {Object.values(Categories).map((values,key)=>(
                    <option value={values.Value} key={key}>
                        {values.Text}
                    </option>
                ))}
                <option value="none">None</option>
            </select>
        </div>

    )
}

Dropdown.propTypes = {
    Value:PropTypes.string.isRequired,
    Categories:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired,
    BookValue:PropTypes.object.isRequired
}
export default Dropdown;