import { Link, Outlet, useLoaderData } from 'react-router'
import './App.css'

function App() {
    const datas = useLoaderData()
    console.log('🚀 ~ App ~ datas:', datas)
    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    Most played songs this week{' '}
                    <Link className="text-red-500" to="/signup">
                        signup
                    </Link>
                </li>

                {datas.map((data) => (
                    <li className="list-row">
                        <div>
                            <img
                                className="size-10 rounded-box"
                                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            />
                        </div>
                        <div>
                            <div>{data?.name}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">
                                {data?.email}
                            </div>
                        </div>

                        <Link className="text-fuchsia-400" to={`/user/${data?._id}`}>
                            details
                        </Link>

                        <Link className="text-fuchsia-400" to={data._id}>
                            edit{' '}
                        </Link>

                        <Link className="text-fuchsia-400" to={data._id}>
                            delete
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
