import React,{Fragment} from "react";
import PropTypes from "prop-types";
import InputGroup from "../../../components/InputGroup/InputGroup";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import "../../../assets/main.css";

export class SignupView extends React.Component {
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
    submitHandler (event) {
        event.preventDefault();
        if (!this.state.userName.length && !this.state.loginPassword.length) {
            this.props.setErrLoginMessage('Username and password fields are required');
        } else if (!this.state.userName.length) {
            this.props.setErrLoginMessage('Username field is required.');
        } else if (!this.state.loginPassword.length) {
            this.props.setErrLoginMessage('Password field is required.');
        } else {
            this.props.Signup({ ...this.state, history: this.props.history });
        }
    }
    render() {
        return (
            <Fragment>
            <div className="login_form md:w-1/2 bg-white p-4 text-center">
                <div className="site_logo w-24 m-auto">
                    <a href="index.html">
                        <img
                            className="w-full"
                            src="images/logo_on_white.png"
                            alt="Site Logo"
                        />
                    </a>
                </div>
                <div className="main_forms">
                    <form className="login_form">
                        <div className="form_title">
                            <h3>Sign Up</h3>
                        </div>
                        <div className="form-item">
                            <label>Username</label>
                            <input type="text" value="" />
                        </div>
                        <div className="form-item">
                            <label>Email Address</label>
                            <input type="email" value="" />
                        </div>
                        <div className="form-item">
                            <label>Password</label>
                            <input type="password" value="" />
                        </div>
                        <div className="form-item">
                            <label>Phone Number</label>
                            <input type="number" value="" />
                        </div>
                        <div className="form-actions">
                            <button type="submit">Submit</button>
                        </div>
                        <div className="forget_pwd">
                            <p>
                                Already Have a account{" "}
                                <a href="login.html">Sign in</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default SignupView;
