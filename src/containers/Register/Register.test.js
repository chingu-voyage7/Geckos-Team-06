import React from "react";
import { render, fireEvent } from "react-testing-library";
import Register from "./Register";

const createProps = props => ({
  createUser: jest.fn(),
  ...props
});

describe("Register", () => {
  it("allows user sign up", () => {
    const newUser = {
      login: "minggas",
      password: "12345",
      name: "fabricio",
      email: "example@gmail.com",
      image: "",
      birth: "1982-09-02",
      facebook: "facebook",
      twitter: "Twitter",
      about: "me is me"
    };
    let props = createProps();
    const { container, getByLabelText } = render(<Register {...props} />);

    const loginNode = getByLabelText("Login");
    const passwordNode = getByLabelText("Password");
    const nameNode = getByLabelText("Name");
    const emailNode = getByLabelText("Email");
    const imageNode = getByLabelText("Image");
    const birthNode = getByLabelText("Birth");
    const faceNode = getByLabelText("Facebook");
    const twitterNode = getByLabelText("Twitter");
    const aboutNode = getByLabelText("About");

    const formNode = container.querySelector("form");

    fireEvent.change(loginNode, {
      target: { value: newUser.login }
    });
    fireEvent.change(passwordNode, {
      target: { value: newUser.password }
    });
    fireEvent.change(nameNode, {
      target: { value: newUser.name }
    });
    fireEvent.change(emailNode, {
      target: { value: newUser.email }
    });
    fireEvent.change(imageNode, {
      target: { value: newUser.image }
    });

    fireEvent.change(faceNode, {
      target: { value: newUser.facebook }
    });

    fireEvent.change(birthNode, {
      target: { value: newUser.birth }
    });

    fireEvent.change(twitterNode, {
      target: { value: newUser.twitter }
    });
    fireEvent.change(aboutNode, {
      target: { value: newUser.about }
    });

    fireEvent.submit(formNode);

    expect(props.createUser).toHaveBeenCalledTimes(1);
    expect(props.createUser).toHaveBeenCalledWith(newUser);
  });
});
