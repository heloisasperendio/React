import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Heloísa", "Cristina", "Sperendio"])

    const [users, setUsers] = useState([
        {id: 1, name: "Heloisa", age: 22},
        {id: 2, name: "Cristina", age: 23},
        {id: 3, name: "Sperendio", age: 24},
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4) //pega um id aleatório

        setUsers((prevUsers) => prevUsers.filter((u) => randomNumber !== u.id))
    }
  
  return (
  <div>
    {/* Sem key */}
    <ul>
        {list.map((item, i) =>  (
            <li key={i}>{item}</li>
        ))}
    </ul>

    {/* Com key */}
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age} anos</li>
        ))}
    </ul>

    {/* Previous state */}

    <button onClick={deleteRandom}>Delete usuário aleatório</button>
</div>
  )
}

export default ListRender