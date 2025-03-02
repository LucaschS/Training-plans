import { Form, Link, useSearchParams } from "react-router-dom";

function AddUserForm() {
  return (
    <Form method="post">
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
      <button type="submit">Add user</button>
    </Form>
  );
}

export default AddUserForm;
