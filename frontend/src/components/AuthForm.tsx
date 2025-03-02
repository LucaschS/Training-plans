import { Form } from "react-router-dom";
function AuthForm() {
  return (
    <Form method="post">
      <p>
        <label htmlFor="login"></label>
        <input type="text" id="login" name="login" required />
      </p>
      <p>
        <label htmlFor="password"></label>
        <input type="text" id="password" name="password" required />
      </p>
      <button type="submit">LogIn</button>
    </Form>
  );
}

export default AuthForm;
