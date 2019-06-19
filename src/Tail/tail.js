import React from "react"
import "../Head/head.css"


const Tail = ({tail , tailImg}) =>{
    return(
        <figure className="back">
         <img src={tail} alt='tail' className={tailImg === tail? "dinars-tail" : "dinar-head"}/>
        </figure>
    )
}

export default Tail