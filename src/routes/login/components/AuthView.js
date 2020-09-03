import React from "react";
import PropTypes from "prop-types";
import InputGroup from "../../../components/InputGroup/InputGroup";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import "../../../assets/main.css";

export class AuthView extends React.Component {
    constructor(props) {
        super(props);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePwd = this.changePwd.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            userName: "",
            loginPassword: "",
        };
    }

    changeUsername(event) {
        this.setState({
            userName: event.target.value,
        });
    }

    changePwd(event) {
        this.setState({
            loginPassword: event.target.value,
        });
    }

    submitHandler(event) {
        event.preventDefault();
        if (!this.state.userName.length && !this.state.loginPassword.length) {
            this.props.setErrLoginMessage(
                "Username and password fields are required"
            );
        } else if (!this.state.userName.length) {
            this.props.setErrLoginMessage("Username field is required.");
        } else if (!this.state.loginPassword.length) {
            this.props.setErrLoginMessage("Password field is required.");
        } else {
            this.props.logIn({ ...this.state, history: this.props.history });
        }
    }
    render() {
        const { errGetUserMessage } = this.props.selectState;
        return (
            <div className="bg-white items-center my-2" >
                <div
                    className={
                        this.props.auth.errLoginMessage.length
                            ? "auth-view err-login"
                            : "bg-white shadow-md rounded px-8 pt-6 pb-8 xl:w-1/4 mb-4 items-center my-2"
                    }
                >
                    {this.props.auth.errLoginMessage.length ? (
                        <p
                            className="err-message"
                            dangerouslySetInnerHTML={{
                                __html: this.props.auth.errLoginMessage,
                            }}
                        />
                    ) : null}
                    <div className="px-3 mb-6 md:mb-0">
                        <span className="logo">
                            <Link to="/">Logo</Link>
                        </span>
                        <h3 className="font-bold text-xl mb-2">User login</h3>
                        <form class="login_form" onSubmit={this.submitHandler}>
                            <div class="form_title">
                                <h3>Login</h3>
                            </div>
                            <div class="form-item">
                                <label>Username or Email Address</label>
                                <br />
                                <input
                                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    value=""
                                />
                            </div>
                            <div class="form-item">
                                <label>Password</label>
                                <br />
                                <input
                                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="password"
                                    value=""
                                />
                            </div>
                            <div class="form-item form-item--checkbox">
                                <input type="checkbox" value="" />
                                <label>Remember Me</label>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Login
                                </button>
                                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#">
                                Forgot Password?
                                </a>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AuthView.propTypes = {
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    logIn: PropTypes.func.isRequired,
    setErrLoginMessage: PropTypes.func.isRequired,
};

export default AuthView;
