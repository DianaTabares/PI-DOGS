import React, { useState, useEffect } from 'react'
import { handleNumber, resetDogs, searchDogs } from '../redux/action';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import style from "../styles/NavBar.module.css"

export default function SearchBar() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => { // cada vez que se inserte una letra en el input se realiza la funcion search
        const timeoutId = setTimeout(search, 500)
        return () => clearTimeout(timeoutId)
    }, [name])
    
    async function search() {
        try {
            if (name === "") { return dispatch(resetDogs()) }
            const { data } = await axios.get(`http://localhost:3001/dogsname?name=${name}`)
            navigate("/home")
            dispatch(searchDogs(data))
            dispatch(handleNumber(1))
        } catch ({ response }) {
            dispatch(searchDogs([]))
            alert(response.data.error)
        }
    }

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <div className={style.searchContainer}>
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder='Search' className='input' onChange={handleChange} type='search' value={name}></input>
        </div>
    )
}