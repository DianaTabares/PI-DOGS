import React from 'react'
import style from "../styles/Card.module.css";
import { Link } from 'react-router-dom'

export default function Card(props) {

    const { id, name, image, temperaments, weight, handleButtonClick } = props
    return (
        <div className={style.cardContainer}>
            <Link className={style.link} to={`/detail/${id}`} >
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <p>W: {weight}</p>
                <div className={style.tempCont}>
                    {temperaments && temperaments.map((t, i) => (<li key={i}>{t}</li>))}
                </div>
            </Link>
        </div>
    )
}