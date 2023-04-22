import { useEffect, useState } from 'react'
import './App.css'
import phrases from './data/phrases.json'
import Fortune from './data/components/Fortune'
import Author from './data/components/Author'
import Loader from './data/components/Loader'



function App() {

  const [cookie, setCookie] = useState(0)
  const [loader , setLoader] = useState(true)

  const fortuneCookie = () => {

    setCookie(Math.floor(Math.random() * (16 - 1) + 1))

  }

  useEffect( () => {
    setTimeout( () => {
      setLoader(false)
    }, 3000)
  })

  const images = [`url("fondo1.png")`, `url("fondo2.png")`, `url("fondo3.png")`, `url("fondo4.png")`]

  let random = Math.floor(Math.random() * 4)

 
  return (
    <div className="App" style={ {backgroundImage: images[random]} } >

      {
        loader && <Loader/>
      }



      <div className='Title'>
        <h1>GALLETAS DE LA FORTUNA</h1>
        <button onClick = { fortuneCookie }>Probar mi suerte</button>
      </div>  
      

      <Fortune
      changeFortune = { phrases[cookie] }
      />

      <Author
      changeFortune = { phrases[cookie] }
      />

      
      
    </div>
  )
}

export default App
