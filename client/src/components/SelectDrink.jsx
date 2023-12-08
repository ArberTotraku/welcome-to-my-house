import React, { useState } from 'react'

const SelectDrink = (props) => {

    const [drink,setDrinks] = useState([]);


  return (
    <div>
<h1>Select your drink</h1>
<p>Don't be shy, order everything you want! A good friend is always welcomed! </p>


    </div>
  )
}

export default SelectDrink