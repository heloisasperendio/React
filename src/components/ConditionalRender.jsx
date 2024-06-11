import React from "react"

const ConditionalRender = () => {
    const user = {
        name:"Heloísa",
        gender: "M"
    }

    const x = true

    const nome = "Jose"

  return (
    <div>
        {/* Render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p> }

        {/* Else */}
        {nome === "Jose" ? 
        (
          <div>
            <p>Olá João!</p>
          </div>  
        ) : 
        (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}

        <div>
            {user.gender == "F" && <p>Olá {user.name}, seja bem vinda!</p> }
        </div>

        {user.gender === "F" ? 
        (
          <div>
            <p>Olá {user.name}! Seja bem vinda!</p>
          </div>  
        ) : 
        (
            <div>
                <p>Olá {user.name}! Seja bem vindo!</p>
            </div>
        )}

    </div>
  )
}

export default ConditionalRender