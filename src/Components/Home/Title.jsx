import React from "react";
import PropTypes from "prop-types";
const Title=({title})=>{
    return(
        <div className="list-books-title">
            <h1>{title}</h1>
        </div>

    )
}
Title.propTypes = {
    title:PropTypes.string.isRequired
}
export default Title;