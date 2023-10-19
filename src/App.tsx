import { useEffect } from 'react'
import './App.css'
import api from './config/axios'

function App() {

  const fetch = async () => {
    const response = await api.get('/admin-only');
    console.log(response);
  }

  useEffect(()=>{
    fetch();
  },[])

  return (
    <>
      
    </>
  )
}

export default App
