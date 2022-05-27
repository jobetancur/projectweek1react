import React from 'react'

const Card = ({quoteRandom}) => {
    
  return (
    <div>
        <article>
            <h4><i class="fa-solid fa-quote-left fa-2x"></i> {quoteRandom.quote} <i class="fa-solid fa-quote-right fa-2x"></i></h4>
            <p>{quoteRandom.author}</p>
        </article>
    </div> 
  )
}

export default Card