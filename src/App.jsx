import { useState } from 'react'
import './App.css'
import phrases from './data/phrases.json'
import Fortune from './data/components/Fortune'
import Author from './data/components/Author'



function App() {

  const [cookie, setCookie] = useState(0)

  const fortuneCookie = () => {

    setCookie(Math.floor(Math.random() * 15))

  }

  // const Image = () => {
  //   return ( 
  //     <Image> Click me </Image>

  //   )
  // }

  const images = [`url("fondo1.png")`, `url("fondo2.png")`, `url("fondo3.png")`, `url("fondo4.png")`]

  let random = Math.floor(Math.random() * 4)

 
  return (
    <div className="App" style={ {backgroundImage: images[random]} } >

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
