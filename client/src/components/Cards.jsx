import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from '../redux/action';
import Error from './Error'
import style from "../styles/Cards.module.css"


// usamos un estado para guardar los perros
export default function Cards({handleButtonClick}) {
    const { numPage, dogs, temperaments } = useSelector((state) => state)
    const dispatch = useDispatch()

    let desde = (numPage - 1) * 8
    let hasta = numPage * 8

    let cantPages = Math.round(dogs.length / 8)
    let viewDogs = dogs.slice(desde, hasta)

    function next() { //handlers del paginado
        dispatch(nextPage())
    }
    function prev() {
        dispatch(prevPage())
    }
    return (
        <div>
            {dogs.length === 0 && temperaments.length === 0 && <Error/>}
            <div className={style.homeContainer}>
                <svg className={numPage > 1 ? 'style.buttonEnabled' : "style.buttonDisabled"} onClick={numPage > 1 ? prev : null} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                </svg>
                <div className={style.cardGrid}>
                    {viewDogs.map((d) => {
                        const { id, name, age, height, weight, image, temperaments } = d
                        return (<Card key={id}
                            id={id}
                            name={name}
                            age={age}
                            temperaments={temperaments}
                            height={height}
                            weight={weight}
                            image={image}
                            handleButtonClick={handleButtonClick}
                        />)
                    })}
                </div>
                <svg className={numPage < cantPages ? 'style.buttonEnabled' : "style.buttonDisabled"} onClick={numPage < cantPages ? next : null} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                </svg>
            </div>
        </div>
    )
}