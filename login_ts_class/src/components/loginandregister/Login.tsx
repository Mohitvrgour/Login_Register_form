import React, { Component } from "react";

interface LoginProps {
    onFormSwitch: (formName: string) => void;
}


interface LoginState {
    email: string;
    pass: string;
}

export class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(this.state.email);
    }

    render() {
        return (
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        type="email"
                        placeholder="youremail@gmail.com"
                        id="email"
                        name="email"
                        className="input-sec"
                    />
                    <input
                        value={this.state.pass}
                        onChange={(e) => this.setState({ pass: e.target.value })}
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        className="input-sec"
                    />
                    <button type="submit" className="button one">Log In</button>
                    <button className="zero">Forgot password</button>
                </form>
                <button className="link-btn" onClick={() => this.props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
                <button className="button two">Google</button>
            </div>
        );
    }
}