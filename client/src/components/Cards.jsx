import React, { useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import style from "./Cards.module.css";


// usamos un estado para guardar los perros
export default function Cards(props) {
    const { dogs } = useSelector((state) => state)
    //const dispatch = useDispatch()

    const cardsPerPage = 8; // Número de cartas por página

    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = dogs.slice(indexOfFirstCard, indexOfLastCard);

    const pageNumbers = Math.ceil(dogs.length / cardsPerPage);

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const next = () => {
        if (currentPage < pageNumbers) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className={style.conteiner}>
            <div className={style.cards} >
            {dogs.map((dog) => {
                const { id, name, age, height, weight, image, temperaments } = dog;
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        age={age}
                        height={height}
                        weight={weight}
                        image={image}
                        temperaments={temperaments}
                    />)
            })}
                <div className={style.pagination}>
                <button onClick={prev} disabled={currentPage === 1}>
                    Anterior
                </button>
                {Array.from({ length: pageNumbers }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={index + 1 === currentPage ? style.active : null}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={next} disabled={currentPage === pageNumbers}>
                    Siguiente
                </button>
            </div>
            </div>
        </div>
    );
}