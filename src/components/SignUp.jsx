import { Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { useContext } from 'react'

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        const Form = new FormData(e.target)
        const name = Form.get('name')
        const email = Form.get('email')
        const pass = Form.get('password')
        const detail = Form.get('details')
        const userData = { name, email, detail }
        createUser(email, pass)
            .then((res) => {
                console.log(res)
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                    })

                    .catch((error) => {
                        console.log('🚀 ~ handleSignUp ~ error:', error)
                    })
            })
            .then((err) => console.log(err))
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="text-center ">
                            <h1 className="text-4xl font-bold">SignUp now!</h1>
                            <Link className="text-yellow-300 mt-8" to="/">
                                Home
                            </Link>
                        </div>
                        <form onSubmit={handleSignUp} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">name</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="input"
                                    placeholder="name"
                                />
                                <label className="fieldset-label">
                                    details
                                </label>
                                <input
                                    name="details"
                                    type="text"
                                    className="input"
                                    placeholder="details"
                                />
                                <label className="fieldset-label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />
                                <label className="fieldset-label">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />

                                <Link
                                    to="/login"
                                    className="link text-start link-hover text-blue-500"
                                >
                                    already have an account
                                </Link>

                                <button className="btn btn-neutral mt-4">
                                    SignUp
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
