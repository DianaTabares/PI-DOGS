import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import "./Cards";
// usamos un estado para guardar los perros

export default function Cards(props) {
    const { dogs } = useSelector((state) => state)
    const dispatch = useDispatch()

    return (

        <div>
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
        </div>
    );
}