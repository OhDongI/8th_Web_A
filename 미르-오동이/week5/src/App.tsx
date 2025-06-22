import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router'
import HomeLayout from './layouts/HomeLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MyPage from './pages/MyPage'
import NotFoundPage from './pages/NotFoundPage'

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
    ],
  },
]

const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: 'my', element: <MyPage /> },
    ],
  },
]

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes])

const App = () => {
  return <RouterProvider router={router} />
}

export default App