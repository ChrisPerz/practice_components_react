import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyFirstComponent } from './components/MyFirstComponent'
import { SecondComponent } from './components/SecondComponent'
import { FourthComponent } from './components/FourthComponent'
import { Child } from './components/child'
function App() {

  const [name, setName] = useState("Christian Pérez Castillo");
  return (
    <div className="App">
      <header className="App-header">
        <hr className='white-hr'/>
        <FourthComponent/>
        <hr className='white-hr'/>
        <Child
          name={name}
          setName={setName}
        />
        <hr className='white-hr'/>
      </header>
    </div>
  )
}

export default App
