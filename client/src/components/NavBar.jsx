import React from "react";
import SearchBar from './SearchBar';
import { useDispatch } from "react-redux";
import { FilterOrg, OrderRaze } from "../redux/action";
import style from "./NavBar.module.css";


export default function NavBar({onSearch}) {
  const dispatch = useDispatch()
  const FilterOrigin = (event) => {
      dispatch(FilterOrg(event.target.value))
  }
  const OrderRaze1 = (event) => {
      dispatch(OrderRaze(event.target.value))
  }
  return (
    <div className={style.nav}>
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
        <select onChange={FilterOrigin}>
            <option value="reset">order by origin:</option>
            <option value="api">api</option>
            <option value="db">base de datos</option>
        </select>

        <select onChange={OrderRaze1}>
            <option value="a">Ascendente</option>
            <option value="d">Descendente</option>
        </select>
    </div>
  )
}
  