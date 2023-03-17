import React from "react";
import { useState } from "react";
import validation from "./validation";

function Form() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  })

const handleInputChange = (event) =>{
  const property = event.target.name;
  const value = event.target.value;
  setUserData({...userData,[property]: value })
  validation({...userData,[property]: value, errors,setErrors})
}

  return (
    <div>
      <div>
        <label htmlFor="usurname">Usurname</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={userData.username}
          onChange={handleInputChange}
        />
          {errors.username && <p>{errors.username}</p>}

      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={userData.password}
          onChange={handleInputChange}
        />
   
      </div>
      <button>Login</button>
    </div>
  );
}

export default Form;
