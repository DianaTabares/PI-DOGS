import React from "react";
import style from "./Detail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dogs } = useSelector((state) => state);
  const dog = dogs.filter((element) => element.id === Number(id));
  const { age, height, image, name, temperaments, weight } = dog[0];

  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.cardImage}>
            <img src={image} alt="" />
          </div>
          <div className={style.cardContent}>
            <h1 className={style.cardTitle}>Codigo: {id}</h1>
            <h2 className={style.cardSubtitle}>Name: {name}</h2>
            <p className={style.cardText}>Age: {age}</p>
            <p className={style.cardText}>Altura {height}</p>
            <p className={style.cardText}>Peso {weight}</p>
            <p className={style.cardText}>
              Temperamentos {temperaments !==null ? temperaments.join(", ") : null} 
            </p>

            <button>
        <div className="btnClose" onClick={() => navigate(-1)}>
          Volver
        </div>
      </button>
      
          </div>
        </div>
      </div>

    </>
  );
}

{/* <div className="btnClose" onClick={() => navigate(-1)}> Volver  </div> // navigate vuelve 1- menos */ }