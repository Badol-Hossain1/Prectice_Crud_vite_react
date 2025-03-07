import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import Swal from 'sweetalert2'

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email, password)
            .then((res) => {
                console.log('🚀 ~ handleLogin ~ res:', res)
                if (res?.user?.email) {
                    Swal.fire({
                        title: 'successfully login the user ',

                        icon: 'success',
                        confirmButtonText: 'done ',
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="text-center ">
                            <h1 className="text-4xl font-bold">Login now!</h1>
                        </div>
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
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
                                    to="/signup"
                                    className="link text-start link-hover text-blue-500"
                                >
                                    dont already have an account
                                </Link>

                                <button className="btn btn-neutral mt-4">
                                    Login
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
