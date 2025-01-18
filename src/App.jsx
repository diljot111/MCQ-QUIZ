import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Categories from './Card/Categories'
import AiQuiz from './Questions/AiQuiz'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Categories />
      {/* <AiQuiz /> */}

    </>
  )
}

export default App
