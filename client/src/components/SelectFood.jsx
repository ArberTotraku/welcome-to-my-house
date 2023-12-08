import React, { useState } from 'react'

const SelectFood = (props) => {
 const [food,setFood] = useState([]);
    return (
    <div>
        <h1>Select what you want to eat</h1>
        <p>Dashuria vjen nga stomaku</p>

        <input type="search" placeholder='Kerko ushqimin'/>
<button>Zgjidh te preferuaren</button>


<button>Shikoni te gjitha ushqimet</button>

    </div>
  )
}

export default SelectFood