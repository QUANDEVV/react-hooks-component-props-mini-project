
 

import React from "react";

function Article(props) {
    const {title, date="January 1, 1970", review} = props
    return(
        <main>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{review}</p>
        </main>
    )
}

export default Article;