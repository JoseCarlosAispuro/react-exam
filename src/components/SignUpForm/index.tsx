import React from "react"

const SignUpForm = () => {
    return (
        <form className="sign-up-form form" onSubmit={handleSubmitForm} noValidate={true}>
            <div className="inputs-fields">
                <div className="input-container">
                    <input className="input"
                           type="text"
                           name="name"
                           placeholder="Name"
                    />
                </div>
                <div className="input-container">
                    <input className="input"
                           type="email"
                           name="email"
                           placeholder="Email"
                    />
                </div>
                <div className="input-container">
                    <input className="input"
                           type="password"
                           name="password"
                           placeholder="Password"
                    />
                </div>
                <div className="input-container">
                    <input className="input"
                           type="password"
                           name="confirmPassword"
                           placeholder="Confirm Password"
                    />
                </div>
            </div>
            <button className="button full submit" type="submit">Create account</button>
        </form>
    )
}

const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
}
export default SignUpForm
