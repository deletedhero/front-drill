import { useEffect, useState } from 'react'
import axios from 'axios'



import './App.css'

function App() {
   const [users,setUsers] = useState([])

   useEffect(()=> {
    axios.get('/api/users')
    .then((response) => {
      setUsers(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
   })

  return (
    <>
      <div>
        <h2>showing users here </h2>
        <p>USERS : {users.length}</p>

        {/*mapping the array of users */ }

        {
          users.map((users,index) => (

            <div key={users.id}> 
              <h3>{users.name}</h3>
              <h3>{users.age}</h3>
              <h3>{users.role}</h3>

            </div>
            

          ))
        }
      </div>
    </>
  )
}

export default App
