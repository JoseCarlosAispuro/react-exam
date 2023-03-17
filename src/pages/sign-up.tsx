import SignUpForm from "../components/SignUpForm";
import MobileHeader from "../components/MobileHeader";

const SignUp = () => {
    return (
        <div className="sign-up">
            <MobileHeader
                prevLink="/sign-in"
                nextLink=""
                header="Create an account"/>
            <div className="sign-up-content grid">
                <SignUpForm/>
            </div>
        </div>
    )
}

export default SignUp
