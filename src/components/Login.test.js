import { getByRole, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("email input should be rendered", () => {
    render(<Login />);
    const emailInputElement = screen.getByPlaceholderText(/email/i)
    expect(emailInputElement).toBeInTheDocument();
  });

  test("password input should be rendered", () => {
    render(<Login />);
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    expect(passwordInputElement).toBeInTheDocument();
  });

  test("login button should be rendered", () => {
    render(<Login />);
    const loginButtonElement = screen.getByRole("button")
    expect(loginButtonElement).toBeInTheDocument();
  });
});
