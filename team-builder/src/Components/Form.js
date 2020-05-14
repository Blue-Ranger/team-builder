import React, { useState } from "react";

const Form = (props) => {
  const [formData, setformData] = useState({
    name: "",
    role: "",
    email: "",
  });

  // to new change data
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  // to new submit data
  const onSubmitData = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitData}>
      <label>
        Name: <input name="name" onChange={handleChange} />
      </label>
      <label>
        Role: <input name="role" onChange={handleChange} />
      </label>
      <label>
        Email: <input name="email" onChange={handleChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
