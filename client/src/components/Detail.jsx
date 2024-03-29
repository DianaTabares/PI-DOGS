import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import style from "../styles/Detail.module.css";
import { useParams } from 'react-router-dom'

export default function Detail() {
  const [dog, setDog] = useState({})
  const { id } = useParams()

  useEffect(() => {
      axios.get(`http://localhost:3001/dogs/${id}`) // hacemos la peticion a nuestro back con el id que llega por parametro y guardamos el resultado en nuestro estado local
          .then(({ data }) => {
              setDog(data)
          })
          .catch((error) => {
              console.log(error)
          })
  }, [id])

  const { name, image, weight, age, height, temperaments } = dog
  return (
      <div className={style.dog}>
          <div className={style.dogheader}>
              <h1 href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" type="text/css">{name}</h1>
          </div>
          <div className={style.dogcontent}>
              <img src={image} alt={name} />
              <div className={style.dogs}>
                  <h2>#{dog.id}</h2>
                  <fieldset>
                      <h3>Usually put between {height} </h3>
                      <h3>He has an approximate weight of {weight} </h3>
                      <h3>A life span estimated of {age}</h3>
                  </fieldset>
                  {temperaments && <h3>Their tempers are</h3>}
                  <fieldset>
                      {temperaments && temperaments.map((t, i) => {
                          return (<p key={i}>{t}</p>)
                      })}
                  </fieldset>
              </div>
          </div>
      </div>
  )
}