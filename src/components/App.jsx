import React, { useState } from "react";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import initialMapped from "../mapped"


// Define the createCards function outside of the App component
const createCards = (mappedValue) => {
  return (
    <Card
      key={mappedValue.id}
      link={mappedValue.link}
      name={mappedValue.name}
      description={mappedValue.description} // Changed "meaning" to "description"
    />
  );
};

function App() {
  const [mapped, setMapped] = useState(initialMapped);

  const addNewObject = () => {
    const userInput = prompt("Enter name, description, and link (comma-separated):");
    if (userInput) {
      const [name, description, link] = userInput.split(",");
      const newObject = {
        id: mapped.length + 1, // Assign a unique ID
        name,
        description,
        link
      };
      setMapped([...mapped, newObject]);
    }
  };

  return (
    <div>
      <h1>
        <span>Mapped</span>
      </h1>
      <button onClick={addNewObject}>Add New Object</button>
      <div className="card-container"></div>
      <dl>{mapped.map(createCards)}</dl>
    </div>
  );
}

export default App;
