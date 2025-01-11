import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setItems([...items, inputValue]);
    setInputValue("");
  }

  return (
    <div>
      <Navbar />
      <h1 className="title">Items</h1>

      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <br />
          <button type="submit">Add Item</button>
        </form>
      </div>

      {items.length > 0 && (
        <div className="items-container">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
