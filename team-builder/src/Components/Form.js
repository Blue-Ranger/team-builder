import React, { useState } from "react";

function Form(props) {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    role: "",
  });

  return (
    <form>
      <label>
        Name: <input name="name" />
      </label>
      <label>
        Email: <input name="email" />
      </label>
      <label>
        Role: <input name="role" />
      </label>
      <button>Add</button>
    </form>
  );
}

export default Form;
