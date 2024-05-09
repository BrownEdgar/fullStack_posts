import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.scss'

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('http://localhost:3000/users')
      .then(res => setUsers(res.data.users))
  }, [])

  return (
    <div className='App'>
      <h1>Our Users</h1>
      {
        users.map(elem => {
          return <h1 key={elem}>{elem}</h1>
        })
      }
    </div>
  )
}
