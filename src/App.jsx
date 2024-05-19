import { useState } from 'react'

import './App.css'

function App() {
   const [users,setUsers] = useState([])

  return (
    <>
      <div>
        <h1>showing users here </h1>
        <h3>USERS : {users.length}</h3>
      </div>
    </>
  )
}

export default App
