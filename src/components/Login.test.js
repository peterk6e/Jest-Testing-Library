import { __esModule } from "@testing-library/jest-dom/dist/matchers";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: {
        id: 1,
        name: "john",
        email: "john@test.com",
        password: "1234567890",
      },
    }),
  },
}));

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
  //

  test("email input value should change", () => {
    render(<Login />);
    const emailInputElement = screen.getByPlaceholderText(/email/i);
    const testValue = "test";
    fireEvent.change(emailInputElement, { target: { value: testValue } });
    expect(emailInputElement.value).toBe(testValue);
  });

  test("password input value should change", () => {
    render(<Login />);
    const testValue = "test";
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordInputElement, { target: { value: testValue } });
    expect(passwordInputElement.value).toBe(testValue);
  });

  test("login button should not be disabled when inputs exist", () => {
    render(<Login />);
    const loginButtonElement = screen.getByRole("button");
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    const emailInputElement = screen.getByPlaceholderText(/email/i);

    const testValue = "test";

    fireEvent.change(emailInputElement, { target: { value: testValue } });
    fireEvent.change(passwordInputElement, { target: { value: testValue } });

    expect(loginButtonElement).not.toBeDisabled();
  });

  test("loading should not be rendered", () => {
    render(<Login />);
    const loginButtonElement = screen.getByRole("button");
    expect(loginButtonElement).not.toHaveTextContent(/please wait/i);
  });

  test("loading should be rendered when click on Login", () => {
    render(<Login />);
    const loginButtonElement = screen.getByRole("button");
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    const emailInputElement = screen.getByPlaceholderText(/email/i);

    const testValue = "test";

    fireEvent.change(emailInputElement, { target: { value: testValue } });
    fireEvent.change(passwordInputElement, { target: { value: testValue } });
    fireEvent.click(loginButtonElement);

    expect(loginButtonElement).toHaveTextContent(/please wait/i);
  });

  test("loading should not be visible after fetching", async () => {
    render(<Login />);
    const loginButtonElement = screen.getByRole("button");
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    const emailInputElement = screen.getByPlaceholderText(/email/i);

    const testValue = "test";

    fireEvent.change(emailInputElement, { target: { value: testValue } });
    fireEvent.change(passwordInputElement, { target: { value: testValue } });
    fireEvent.click(loginButtonElement);

    await waitFor(() =>
      expect(loginButtonElement).not.toHaveTextContent(/please wait/i)
    );
  });
});
