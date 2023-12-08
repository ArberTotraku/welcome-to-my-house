import React, { useState } from 'react'

const SelectDrink = (props) => {

    const [drink,setDrinks] = useState([]);


  return (
    <div>
<h1>Select your drink</h1>
<p>Don't be shy, order everything you want! A good friend is always welcomed! </p>

<input type="search" placeholder='Kerko ushqimin'/>
<button>Zgjidh te preferuaren</button>


<button>Shikoni te gjitha pijet</button>
    </div>
  )
}

export default SelectDrink