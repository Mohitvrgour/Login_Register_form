import React, { Component, ChangeEvent } from "react";

interface RegisterProps {
    onFormSwitch: (formName: string) => void;
}

interface RegisterState {
    email: string;
    pass: string;
    name: string;
}

export class Register extends Component<RegisterProps, RegisterState> {
    state = {
        email: '',
        pass: '',
        name: '',
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: event.target.value });
    };

    handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value });
    };

    handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ pass: event.target.value });
    };

    render() {
        const { name, email, pass } = this.state;

        return (
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <input
                        value={name}
                        name="name"
                        onChange={this.handleNameChange}
                        id="name"
                        placeholder="Full Name"
                        className="input-sec"
                    />
                    <input
                        value={email}
                        onChange={this.handleEmailChange}
                        type="email"
                        placeholder="youremail@gmail.com"
                        id="email"
                        name="email"
                        className="input-sec"
                    />
                    <input
                        value={pass}
                        onChange={this.handlePassChange}
                        type="password"
                        placeholder="Password"
                        id="password"
                        className="input-sec"
                    />
                    <button type="submit" className="button one">Register</button>
                </form>
                <button className="link-btn" onClick={() => this.props.onFormSwitch('login')}>
                    Already have an account? Login here.
                </button>
                <button className="button two">Google</button>
            </div>
        );
    }
}
