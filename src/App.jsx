import './App.css'

//Importando imagem da pasta assets
import night from './assets/night.jpg'

// UseState
import Data from './components/Data'

//Renderizando listas
import ListRender from './components/ListRender'

//conditionalRender
import ConditionalRender from './components/ConditionalRender'

// Props
import ShowUserName from './components/ShowUserName'

//Props destructured
import CarDetails from './components/CarDetails'

//Renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
]

// Fragment
import Fragment from './components/Fragment'

// Children
import Container from './components/Container'

// Função em prop
import ExecuteFunction from './components/ExecuteFunction'

// Elevação de State - State Lift
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {

  //Função em prop
  function showMessage() {
    console.log("evento do componente pai")
  }

  //Elevação de State - State Lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App' style={{paddingBottom: "200px"}}>
      <h1>Avançando em React</h1>

      {/* imagem pasta public */}
      <img src="/img.jpg" alt="Alguma imagem" />

      {/* Imagem assets */}
      <img src={night} alt="Noite" />

      {/* useState */}
      <Data/>

      {/* List Render */}
      <ListRender/>

      {/* ConditionalRender */}
      <ConditionalRender/>

      {/* Props */}
      <ShowUserName name = "Heloisa"/>

      {/* Props destructured */}
      <CarDetails brand= "BMW" km= {1000} color= "Vermelho"/>

      {/* Reaproveitamento de componentes */}
      <CarDetails brand= "Fiat" km= {302900} color= "Branco"/>
      <CarDetails color= "Prata" brand= "VW" km= {0} />

      {/* Renderização de lista com componentes */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand = {car.brand} color= {car.color} km= {car.km}/>
      ))}

      {/* Fragment */}
      <Fragment/>

      {/* Children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>

      <Container>
        <h3>Teste</h3>
        <p>do meu componente</p>
      </Container>

      {/* Funcão em prop */}
      <ExecuteFunction myFunction={showMessage}/> 

      {/* Elevação de State - State Lift */}
      <Message msg = {message}/>                      {/* Exibe a mensagem */}
      <ChangeMessage handleMessage={handleMessage}/>  {/* Alera a mensagem e envia a mudança para o componente pai*/}

    </div>
  )
}

export default App
