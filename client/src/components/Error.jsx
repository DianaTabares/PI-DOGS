import React from 'react';
import style from "../styles/Error.module.css"

export default function Error() {
    return (
        <div className={style.errorContainer}>
            <div className={style.displayError}>
                <h1>Error 404</h1>
                <h2>The connection to the server has failed</h2>
                <h3> or </h3>
                <h2>a non-existent route has been entered</h2>
            </div>
            <img src='https://img2.freepng.es/20190730/cut/kisspng-puppy-dog-animation-cartoon-video-pixabay-5d409a7fc28786.4314978315645149437968.jpg' alt="sorry"></img>
        </div>
    )
}