import SignInForm from "../components/SignInForm";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="sign-in grid">
            <div className="logo-container">
                <img src="/images/app-logo.svg" alt="App Logo"/>
            </div>
            <div className="sign-in-form-container">
                <SignInForm />
                <Link className="link register-link" to="/sign-up">Create an account</Link>
            </div>
        </div>
    )
}

export default SignIn
