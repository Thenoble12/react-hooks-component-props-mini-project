import React from "react";

function Article({ id, title, date, preview }) {
    return (
        <div key={id}>
            <h3>{title}</h3>
            { date ? <small>{date}</small> : <small>January 1, 1970</small> }
            <p>{preview}</p>
        </div>
    )
}

export default Article;