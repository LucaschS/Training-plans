import { Form } from "react-router-dom";
function SignUpForm() {
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
      <p>
        <label htmlFor="dupa"></label>
        <input type="text" id="dupa" name="dupa" required />
      </p>
      <button type="submit">Sign up</button>
    </Form>
  );
}

export default SignUpForm;
