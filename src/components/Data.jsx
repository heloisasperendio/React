import {useState} from 'react'

const Data = () => {

    let someData = 10

    const [anotherNumber, setAnotherNumber] = useState(15)

    // String
    const [apelido, setApelido] = useState("Heloísa")

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 20)}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}>Mudar State</button>
        </div>
        <div>
            <p>{apelido}</p>
            <button onClick={() => setApelido("Helô")}>Apelido</button>
        </div>
    </div>
  )
}

export default Data