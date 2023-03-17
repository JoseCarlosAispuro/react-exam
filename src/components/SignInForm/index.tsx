import React, {useEffect, useState} from "react"
import regexValidations from "../../utils/regexExpressions";
import {useAuth} from "../../hooks/useAuth";

const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState<string | null>(null)
    const [errorPassword, setErrorPassword] = useState<string | null>(null)
    const [serverError, setServerError] = useState(null)
    const {login} = useAuth()

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorEmail(!regexValidations('email')?.test(email) ? 'Please ensure your email contain one @ character' : '')
        setErrorPassword(!regexValidations('password')?.test(password) ? 'Please verify that your password contains minimum eight characters, at least one letter, one number and one special character' : '')
    }

    useEffect(() => {
        if(errorEmail === '' && errorPassword === '') {
            const userData = {
                id: "1",
                name: "John Doe",
                email: email,
                authToken: "akajsbndkaASD232asASDa"
            }
            login(userData)

        }
    }, [errorPassword, errorPassword])

    return (
        <form className="sign-in-form form"
              onSubmit={handleSubmitForm}
              noValidate={true}>
            <div className="inputs-fields">
                <div className="input-container">
                    <img src="/images/email-icon.svg" alt="Email Icon"/>
                    <input className="input"
                           type="email"
                           name="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="Email"
                    />
                </div>
                {errorEmail &&
                    <span className="error-message body small">{errorEmail}</span>
                }
                <div className="input-container">
                    <img src="/images/lock-icon.svg" alt="Lock Icon"/>
                    <input className="input"
                           type="password"
                           name="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Password"
                    />
                </div>
                {errorPassword &&
                    <span className="error-message body small">{errorPassword}</span>
                }
            </div>
            {serverError &&
                <span className="error-message body small">Something went wrong doing the request please, retry in 5min</span>
            }
            <button className="button full submit" type="submit">Log In</button>
        </form>
    )
}
export default SignInForm
