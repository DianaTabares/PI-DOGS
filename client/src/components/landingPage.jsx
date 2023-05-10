import React from 'react';
import { Link } from 'react-router-dom';
import style from'./landingPage.module.css';

const LandingPage = () => {
  return (
    <div className={style.container}>
      <img src='https://w7.pngwing.com/pngs/736/549/png-transparent-american-eskimo-dog-puppy-dog-breed-pet-dog-training-dogs-animals-carnivoran-pet.png' alt='Bienvenidos'/>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export default LandingPage;