import React, { Component } from "react";

class Prihlasenie extends Component {
    componentWillMount() {
        let loggedIn = window.localStorage.getItem("login");
        console.log(loggedIn);
        this.setState({ user: loggedIn });
    }
    doLogin() {
        this.setState({ user: this.login });
        window.localStorage.setItem("login", this.login);
    }
    doLogout() {
        this.setState({ user: "" });
        window.localStorage.setItem("login", this.login);
    }
    showLoginForm() {
        if (this.state.user == "")
            return (
                <form>
                    Login{" "}
                    <input
                        type="text"
                        id="login"
                        onChange={evt => {
                            this.login = evt.currentTarget.value;
                        }}
                    />
                    <br />
                    Password{" "}
                    <input
                        type="password"
                        onChange={evt => {
                            this.password = evt.currentTarget.value;
                        }}
                    />
                    <br />
                    <button onClick={() => this.doLogin()}>Prihlasenie</button>
                </form>

            );

        else
            return (
                <div>
                    Prihlaseny je {this.state.user}
                    <p>
                    <button onClick={() => this.doLogout()}>Odhlásenie</button>
                        </p>
                </div>
            );
    }
    render() {
        return <div className="Login">{this.showLoginForm()}</div>;
    }
}
export default Prihlasenie;