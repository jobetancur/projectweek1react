import { useState } from 'react'
import './App.css'
import Botton from './components/Botton'
import Card from './components/Card'
import quote from './json/quote.json'


const arrayColor = [
  '#33AFAA', '#98EC66', '#CCD962', '#9E98D8', '#4E17A3', '#722F66', '#8AEE90', '#0895DC', '#D84990', '#AD283B', '#1F696E', '#8E64FC', '#725866', '#81D5E1', '#69C674'
]

let color = [];

function App() {
  
  const createIndexRandom = data => {
    return Math.floor(Math.random() * data.length)
  }

  let indexQuoteRandom = createIndexRandom(quote)
  let indexColorRandom = createIndexRandom(arrayColor)

  const [quoteRandom, setquoteRandom] = useState(quote[indexQuoteRandom])
  const [colorRandom, setcolorRandom] = useState(arrayColor[indexColorRandom])

  const bgStyle = {
    backgroundColor: colorRandom
  }

  const appStyle = {
    color: colorRandom
  }

  function Click (){
    indexQuoteRandom = createIndexRandom(quote);
    setquoteRandom(quote[indexQuoteRandom]);
    indexColorRandom = createIndexRandom(arrayColor);
    setcolorRandom(arrayColor[indexColorRandom]);
  }

  color.push(colorRandom)
  // console.log(color)
  

  return (
    <div style={bgStyle} className='bg'>
      <div style={appStyle} className="App">
        <Card 
          quoteRandom={quoteRandom}
        />
        <Botton 
          click={Click} 
          color={colorRandom}
        />  
      </div>  
    </div>
  )
}

export default App
