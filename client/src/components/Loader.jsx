import React from 'react'
import style from"../styles/Loader.module.css"

export default function Loader() {
    return (
        <div className={style.ckgroundLoading}>
            <div className={style.loadingContainer}>
                <h1 class={style.loader}>Loading</h1>
                </div>
                <div className={style.gifContainer}>
                    <img src='https://media.tenor.com/YdsMwdIApe4AAAAC/running-dog.gif' alt="Loading..."></img>
                </div>
                <div className={style.footerLoading}>
                <h1> </h1>
                </div>
        </div>
    )
}