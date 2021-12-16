import React from "react";
import './style.css'
import logo from '../../img/todomvc.svg'

export const Header =({setDarkTheme, darkTheme})=>{

    return(
        <header>
            <div className='logo'>
                <img className={'logotype'} src={logo} alt='logo'/>
                <h1>ToDos</h1>
            </div>
            <div className={'ThemeTogglerBlock'}>
                <span>Сменить тему</span>
                <div className={'ThemeToggler'}>
                    <input onChange={()=>setDarkTheme(!darkTheme)} type="checkbox" name="themeToggler" id="toggler" />
                    <label htmlFor="toggler" />
                </div>
            </div>
        </header>
    )
}