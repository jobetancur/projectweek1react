import React from 'react'

const Botton = ({click, color}) => {

    console.log(color)

  return (
    <div className='prueba' >
        <button onClick={click} style={{color: `${color}` }} >
        <i class="fa-solid fa-circle-chevron-right fa-3x"></i>
        </button>
    </div>
  )
}

export default Botton