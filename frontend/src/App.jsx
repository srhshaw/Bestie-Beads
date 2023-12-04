import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Main from './components/Main'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      setUserId(userId)
    } else {
    localStorage.setItem('userId', uuidv4())
    }
  }, [userId])
  
  return (
      <div className = "app">
        < Header />
        < Nav />
        < Main 
          userId = {userId}
        />
        < Footer />
      </div>
    
  )
}

export default App
