import React, { useEffect, useState } from "react";
import "./App.css";
import useThrotlle from "./Hooks/useThrottle";

function App() {
  const [value, setValue] = useState<string>("Random");
  const throttledValue = useThrotlle(value, 1000);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("event fired");
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Enter random string"
        value={value}
      />
      <h3>Throttling text: {value}</h3>
    </div>
  );
}

export default App;
