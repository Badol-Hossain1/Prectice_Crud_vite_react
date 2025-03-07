import { useLoaderData } from "react-router"

const OnePage = () => {
    const data = useLoaderData()
    console.log("🚀 ~ OnePage ~ data:", data)

    return <div>this is details


       <ul>
        <li>
            {data.name} 
            <br />
            {data.detail}
        </li>
       </ul>
    </div>
}

export default OnePage
