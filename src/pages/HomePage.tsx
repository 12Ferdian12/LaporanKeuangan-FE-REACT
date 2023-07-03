import { useState } from 'react'
import { Header1,Header2 } from '../components/home/header'
import Title from '../components/home/title'
import Content from '../components/home/content'
import Footer from '../components/home/footer'

function HomePage() {
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

export default HomePage