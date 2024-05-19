import { useState } from 'react'

import './App.css'

function App() {
   const [users,setUsers] = useState([])

  return (
    <>
      <div>
        <h2>showing users here </h2>
        <p>USERS : {users.length}</p>

        {/*mapping the array of users */ }

        {
          users.map((users,index)=> {

            <div key={users.id}>
              <h3>{users.name}</h3>
              <h3>{users.age}</h3>
              <h3>{users.role}</h3>

            </div>
            

          })
        }
      </div>
    </>
  )
}

export default App
