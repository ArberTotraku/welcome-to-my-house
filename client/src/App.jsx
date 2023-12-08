
import './App.css'
import Cart from './components/Cart'
import Login from './components/Login'
import SelectDrink from './components/SelectDrink'
import SelectFood from './components/SelectFood'

function App() {

  return (
   
   <div className='App'>
    <h1>Welcome to my home</h1>
    <h2>Enjoy your stay</h2>
    <Login/>
    <SelectDrink/>
    <SelectFood/>
    <Cart/>
   </div>
  )
}

export default App
