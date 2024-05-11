import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.scss'
import Products from './components/Products/Products';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('http://localhost:3000/users')
      .then(res => setUsers(res.data.users))
  }, [])

  return (
    <div className='App'>
      <Products />
    </div>
  )
}
