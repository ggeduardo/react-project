import React from 'react'
import TimerDate from './TimerDate.js'

import {Link} from 'react-router-dom'

const Timer = () =>{
    
    
    return(
        <div className="timer_area">
            <div className = "container">
                <div className="main_title">
                    <h2>Las Ofertas Mas hot Terminan pronto</h2>
                    <p> Por esa razón aprovecha estos descuentos que tenemos en gran cantidad de productos</p>
                    <Link className="main_btn" to="/categories">COMPRAR</Link>
                </div>
                <div className="timer_inner">
                    <div className="timer" id="timer">
                        <TimerDate Date="days"/>
                        <TimerDate Date="hours"/>
                        <TimerDate Date="minutes"/>
                        <TimerDate Date="seconds"/>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Timer