import { type FormEvent, useEffect } from "react";

function AddUser() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data, "data");

    const fetchedData = await fetch('http://localhost:8080/admin/add-user', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
  };


  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label htmlFor="surname"></label>
        <input type="text" id="surname" name="surname" />
      </p>
      <p>
        <label htmlFor="email"></label>
        <input type="text" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="phone"></label>
        <input type="text" id="phone" name="phone" />
      </p>
      <button type="submit">
        Add user
      </button>
    </form>
  );
}

export default AddUser;
