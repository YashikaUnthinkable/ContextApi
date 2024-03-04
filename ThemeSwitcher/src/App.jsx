import { useState } from 'react'
import Card from './Components/Card'
import TeamButton from './Components/TeamButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeamButton/>
      <Card/>
    </>
  )
}

export default App
