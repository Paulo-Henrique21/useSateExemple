import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App (){

  const [name, setName] = useState("Bonieky") 
  const [age, setAge] = useState(90)
  const [bg, setBg] = useState('#ff0000')

  const[list, setList] = useState([
    "O rato Roeu a roupa do rei de Roma.",
    "Aqui vai uma frase poética.",
    "A inspiração acabou."
  ])

  const handle20 = () => {
    setAge(20)
    setBg("#0000ff")
  }

  const handle90 = () => {
    setAge(90)
    setBg("#ff0000")
  }

  const handleRed = () => {
    setBg("#ff0000")
  }

  const handleBlue = () => {
    setBg("#0000ff")
  }



  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />

      {age === 90 && 
      <button onClick={handle20}>Tenho 20 anos</button>
      }

      {age === 20 && 
      <button onClick={handle90}>Tenho 90 anos</button>
      }
      
      {bg === "#ff0000" &&
      <button onClick={handleBlue}>Azul</button>
      }

      {bg === "#0000ff" && 
      <button onClick={handleRed}>vermelho</button>
      }

      <hr/>

      <ul>
        {list.map((frase, index)=>(
          <li key={index}>{frase}</li>
        ))}
      </ul>

      <Footer/>
    </div>
  )
}