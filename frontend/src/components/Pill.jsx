import { useEffect, useState } from "react";

export const Pill = ({ content, rowId }) => {
  const [newValue, setNewValue] = useState(content); // Initialize newValue with content
  const [wasClicked, setWasClicked] = useState(false);

  let pillClass =
    "text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none rounded-lg";
  if (content.startsWith("Contactado")) {
    pillClass += " text-primary bg-primary-light";
  } else if (content.startsWith("Esperando respuesta")) {
    pillClass += " text-warning bg-warning-light";
  } else if (content.startsWith("Win")) {
    pillClass += " text-success bg-success-light";
  } else if (content.startsWith("Lose")) {
    pillClass += " text-danger bg-danger-light";
  } else if (content.startsWith("En llamada")) {
    pillClass += " text-light-inverse bg-light";
  }

  const handleChange = (event) => {
    setNewValue(event.target.value); // Update newValue on select change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://mycontent-backend.onrender.com/api/table/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          row_position: rowId + 1,
          new_value: newValue,
        }),
      });

      if (response.ok) {
        alert(`Row ${rowId} updated successfully with ${newValue}`);
        // Optionally, you can update state or handle success UI here
        setWasClicked(false); // Reset wasClicked state to close the form
      } else {
        alert("Failed to update row");
        // Handle error cases
      }
    } catch (error) {
      console.error("Error updating row:", error);
    }
  };

  const handleClick = () => {
    setWasClicked(!wasClicked);
  };

  return wasClicked ? (
    <form className="flex justify-center items-stretch" onSubmit={handleSubmit}>
      <select
        className={pillClass}
        name={content}
        id={rowId}
        value={newValue} // Bind select value to newValue
        onChange={handleChange} // Handle select change
      >
        <option value="Contactado">Contactado</option>
        <option value="Esperando respuesta">Esperando respuesta</option>
        <option value="Win">Win</option>
        <option value="Lose">Lose</option>
        <option value="En llamada">En llamada</option>
      </select>
      <button
        type="submit"
        className="ml-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Update
      </button>
    </form>
  ) : (
    <span onClick={handleClick} className={`${pillClass} cursor-pointer`}>
      {content}
    </span>
  );
};
