import React, { useState } from 'react'
import SelectDrink from './SelectDrink'
import SelectFood from './SelectFood'
const Cart = () => {
const [numberOfDrinks,setNumberOfDrinks] = useState(0);

  return (
    <div>

    <p>Mund te zgjidhni me shume nese doni :D</p>
    <input type="name" placeholder='Shkruani emrin'/>
    <button>Porosit tani</button>
<p>

  Porosia e zgjedhur: {numberOfDrinks}
</p>
    </div>
  )
}

export default Cart