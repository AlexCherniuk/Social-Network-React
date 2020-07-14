import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
console.log(s);

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${c2}`;


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName = {s.gold}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName = {s.gold}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName = {s.gold}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName = {s.gold} >Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/setting' activeClassName = {s.gold}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;