import './App.css';
import Cards from './components/Cards';
import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addDogs} from './redux/action.js';
import LandingPage from './components/landingPage';
import NavBar from './components/NavBar';
import Detail from './components/Detail'
import FormPage from './components/FormPage';


function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    axios.get("http://localHost:3001/dogs")
      .then(({ data }) => {
        dispatch(addDogs(data))
      })
      .catch((error) => console.log(error))
  }, [dispatch])
async function onSearch(name) {
  try {
    const { data } = await axios.get(`http://localhost:3001/dogsname?name=${name}`)
    dispatch(addDogs(data))
  } catch ({ response }) {
    alert(response.data.error)
  }
}
  return (
    <div className="App">
    {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <h1>Dogs</h1>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path='/home' element={<Cards></Cards>}></Route>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/Create' element={<FormPage />} />
      </Routes>
    </div>
  );
}
export default App;
