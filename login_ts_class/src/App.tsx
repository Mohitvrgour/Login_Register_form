import React, { Component } from "react";
import "./components/loginandregister/App.css";
import { Login } from "./components/loginandregister/Login";
import { Register } from "./components/loginandregister/Register";
import Navbar from "./components/navbar/Navbar";

interface AppState {
  currentForm: string;
}

class AppClass extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentForm: "login",
    };
  }

  toggleForm = (formName: string): void => {
    this.setState({ currentForm: formName });
  };

  render(): JSX.Element {
    const { currentForm } = this.state;
    return (
      <>
        <Navbar />
        <div className="App">
          {currentForm === "login" ? (
            <Login onFormSwitch={this.toggleForm} />
          ) : (
            <Register onFormSwitch={this.toggleForm} />
          )}
        </div>
      </>
    );
  }
}

export default AppClass;
