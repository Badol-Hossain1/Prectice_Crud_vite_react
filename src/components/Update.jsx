import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Update = () => {
    const data = useLoaderData()
    console.log("🚀 ~ Update ~ data:", data)
    const handleUpdate = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const name = form.get('name')
        const detail = form.get('details')
        const allData = {name,email,detail}
        fetch(`http://localhost:5000/update/${data._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
             <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="text-center ">
                            <h1 className="text-4xl font-bold">Login now!</h1>
                        </div>
                        <form onSubmit={handleUpdate} className="card-body">
                            <fieldset className="fieldset">
                            <label className="fieldset-label">name</label>
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={data?.name}
                                    className="input"
                                    placeholder="name"
                                /> <label className="fieldset-label">details</label>
                                <input
                                    name="details"
                                    type="text"
                                    defaultValue={data?.detail}
                                    className="input"
                                    placeholder="details"
                                />
                                <label className="fieldset-label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    defaultValue={data?.email}
                                    className="input"
                                    placeholder="Email"
                                />
                               
                                <Link
                                    to="/signup"
                                    className="link text-start link-hover text-blue-500"
                                >
                                    dont already have an account
                                </Link>

                                <button className="btn btn-neutral mt-4">
                                   update
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Update;