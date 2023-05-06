 import style from "./Card.css";

export default function Card(props) {
    return (
        <div className={style.container}>
            <img src={props.image} alt="imagen"/>
            {/* onClick={() => props.onClose(props.id)} */}
            <h2>ID: {props.id}</h2>
            <h2>Nombre: {props.name}</h2>
            <h2>Temperamento: {props.temperament}</h2>
            <h2>Peso: {props.weight}</h2>
            {/* <button  className={style.closeButton}>X</button> */}
        </div>
    );
}