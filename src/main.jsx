import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import OnePage from './components/OnePage.jsx'
import Update from './components/Update.jsx'
import PrivateRoute from './private/PrivateRoute.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/users'),
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>,
    },
    {
        path: `/user/:id`,
        element: <OnePage></OnePage>,
        loader: ({ params }) =>
            fetch(`http://localhost:5000/user/${params.id}`),
    },
    {
        path: `/update/:id`,
        element: (
            <PrivateRoute>
                <Update></Update>
            </PrivateRoute>
        ),
        loader: ({ params }) =>
            fetch(`http://localhost:5000/update/${params.id}`),
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>
)
