import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'

const router = createBrowserRouter([
    [
        {
            path: '/',
            element: <App></App>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>,
        },
    ],
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
)
