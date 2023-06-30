import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header1,Header2 } from './components/home/header'
import Title from './components/home/title'
import Content from './components/home/content'
import Footer from './components/home/footer'

function App() {
  const [count, setCount] = useState(0)

  function handleAddCount(count: number){
    setCount(count+1)
  }

  return (
    <>
      {
        count > 5 ? (<Header1/>) : (<Header2/>)
      }
      <Title/>
      <Content
        count={count}
        handleAddCount={handleAddCount}
      />
      <Footer/>
    </>
  )
}

export default App
