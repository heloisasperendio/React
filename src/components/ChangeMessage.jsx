
const ChangeMessage = ({handleMessage}) => {
    const messages = ["Oi", "Olá", "Tudo bem?"]
  
    return (
    <div>
        <button onClick = {() => handleMessage(messages[0])}>1</button> {/* arrow function pois iremos passar parâmetros*/}
        <button onClick = {() => handleMessage(messages[1])}>2</button>
        <button onClick = {() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessage