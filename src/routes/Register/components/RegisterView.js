import React, { Fragment } from "react";
import PropTypes from "prop-types";
import InputGroup from "../../../components/InputGroup/InputGroup";
import { Link } from "react-router-dom";
import "./RegisterView.scss";

export class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.changename = this.changename.bind(this);
        this.changePwd = this.changePwd.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            Name: "",
            Email: "",
            Password: "",
        };
    }
    changename(event) {
        this.setState({
            Name: event.target.value,
        });
    }

    changeEmail(event) {
        this.setState({
            Email: event.target.value,
        });
    }

    changePwd(event) {
        this.setState({
            Password: event.target.value,
        });
    }

    submitHandler(event) {
        event.preventDefault();
        // if (!this.state.Name.length && !this.state.SignupPassword.length) {
        //     this.props.seterrSignupMessage(
        //         "name and password fields are required"
        //     );
        // } else if (!this.state.userName.length) {
        //     this.props.seterrSignupMessage("name field is required.");
        // } else if (!this.state.loginPassword.length) {
        //     this.props.seterrSignupMessage("Password field is required.");
        // } else {
            this.props.Signup({ ...this.state, history: this.props.history });
        // }
    }
    render() {
        //const { errSignupMessage } = this.props.registerState;
        return (
            <Fragment>
                <div>
                    <div className="centered-container">
                        <span className="logo">
                            <Link to="/">Logo</Link>
                        </span>
                        <h3 className="login-title">User SignUp</h3>
                        <form
                            className="login-form"
                            onSubmit={this.submitHandler}
                            formNoValidate>
                            <InputGroup
                                id="Name"
                                label="Name"
                                type="text"
                                placeholder=""
                                subtitle={
                                    "You may login with either your assigned username or your e-mail address."
                                }
                                value={this.state.Name}
                                onChange={this.changename}
                            />
                            <InputGroup
                                id="Email"
                                label="Email"
                                type="email"
                                placeholder=""
                                subtitle={"Enter the valid email"}
                                value={this.state.Email}
                                onChange={this.changeEmail}
                            />
                            <InputGroup
                                id="Password"
                                label="Password"
                                type="password"
                                placeholder=""
                                subtitle={
                                    "The password field is case sensitive."
                                }
                                value={this.state.Password}
                                onChange={this.changePwd}
                            />
                            <div className="bottom-login-part margin-bottom-15">
                                <button className="btn btn-default margin-r-10">
                                    Signup
                                </button>
                                {/*this.props.auth.logInSpinner && <Spinner />*/}
                                <p />
                            </div>
                            <p className="login-info">
                                <Link to="/forgot-password">
                                    Reset Password
                                </Link>
                            </p>
                            <p className="login-info">
                                If you need any help logging in, please contact
                                our enquiry line on{" "}
                                <a href="tel:01962 674840">01962 674840</a> or
                                email:
                                <a href="mailto:example@email.com">
                                    enquiries@localsurveyorsdirect.co.uk
                                </a>
                            </p>
                            <p>
                                Return to main website{" "}
                                <a href="#">www.localsurveyorsdirect.co.uk</a>
                            </p>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

RegisterView.propTypes = {
    history: PropTypes.object.isRequired,
    Register: PropTypes.object.isRequired,
    Signup: PropTypes.func.isRequired,
    setErrSignupMessage: PropTypes.func.isRequired,
};

export default RegisterView;
