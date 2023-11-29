import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className = "app">
        < Header />
        < Home />
        < Footer />
      </div>
    
  )
}

export default App
