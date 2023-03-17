import React, { useState } from "react";

function SearchBar({onSearch}) {
  const [id,setId] = useState()

  const handleChange = (event) =>{
    setId(event.target.value)
  }

    return (
       <div>
         <input type='search' onChange={handleChange} />
       <button  onClick={() => onSearch(id)} >Agregar</button> 
       </div>
    );
 }
 
 export default SearchBar