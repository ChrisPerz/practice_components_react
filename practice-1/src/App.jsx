import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyFirstComponent } from './components/MyFirstComponent'
import { SecondComponent } from './components/SecondComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fundamentos de React</h1>
        <hr className='white-hr' />
        <MyFirstComponent />
        <hr className='white-hr' />
        <SecondComponent />
      </header>
    </div>
  )
}

export default App
