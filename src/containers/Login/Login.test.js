import React from "react";
import { render, fireEvent } from "react-testing-library";
import Login from "./Login";

const createProps = props => ({
  createLogin: jest.fn(),
  ...props
});

describe("Login", () => {
  it("allows user submit a login", () => {
    const newLogin = { login: "minggas", password: "12345" };
    let props = createProps();
    const { container, getByLabelText } = render(<Login {...props} />);

    const loginNode = getByLabelText("Login");
    const passwordNode = getByLabelText("Password");
    const formNode = container.querySelector("form");

    fireEvent.change(loginNode, {
      target: { value: newLogin.login }
    });
    fireEvent.change(passwordNode, {
      target: { value: newLogin.password }
    });

    fireEvent.submit(formNode);

    expect(props.createLogin).toHaveBeenCalledTimes(1);
    expect(props.createLogin).toHaveBeenCalledWith(newLogin);
  });
});
