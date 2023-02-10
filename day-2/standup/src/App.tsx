import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  interface UserDetails {
    username: string | "";
    description: string | "";
  }

  const [count, setCount] = useState(0);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    username: "",
    description: "",
  });
  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((values) => ({ ...values, [name]: value }));
  };
  console.log(userDetails)
  return (
    <div className="App">
      <form action="">
        <input type="text" name="username" onChange={handleOnChange} />
        <textarea name="description" onChange={handleOnChange}></textarea>
      </form>
    </div>
  );
}

export default App;
