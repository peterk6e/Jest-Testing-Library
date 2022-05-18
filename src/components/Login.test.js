import { getByRole, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("email input should be rendered", () => {
    render(<Login />);
    const emailInputElement = screen.getByPlaceholderText(/email/i);
    expect(emailInputElement).toBeInTheDocument();
  });

  test("password input should be rendered", () => {
    render(<Login />);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement).toBeInTheDocument();
  });

  test("login button should be rendered", () => {
    render(<Login />);
    const loginButtonElement = screen.getByRole("button");
    expect(loginButtonElement).toBeInTheDocument();
  });

  test("email input should be empty", () => {
    render(<Login />);
    const emailInputElement = screen.getByPlaceholderText(/email/i);
    expect(emailInputElement.value).toBe("");
  });

  test("password input should be empty", () => {
    render(<Login />);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement.value).toBe("");
  });

  test("login button should be disabled", () => {
    render(<Login />);
    const loginButtonElement = screen.getByRole("button");
    expect(loginButtonElement).toBeDisabled();
  });

  test("error message should not be visible", () => {
    render(<Login />);
    const errMessageElement = screen.getByText(/oops/i);
    expect(errMessageElement).not.toBeVisible();
  });
  
});
