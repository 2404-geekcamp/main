import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import SignUp from './pages/auth/SignUp.jsx'
import InitProfile from './pages/auth/InitProfile.jsx'
import SignIn from './pages/auth/SignIn.jsx'

import Chats from './pages/chats/Chats.jsx'
import ChatsId from './pages/chats/ChatsId.jsx'

import Result from "./pages/search/Result.jsx"
import Search from "./pages/search/Search.jsx"

import Home from './pages/Home.jsx'
import UserId from "./pages/UserId.jsx"
import UserIdEdit from "./pages/UserIdEdit.jsx"

import InviteMessages from './pages/InviteMessages.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // auth
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/init-profile",
    element: <InitProfile />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },

  // home
  {
    path: "/home",
    element: <Home />,
  },

  // search
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/search/result",
    element: <Result />,
  },

  // user
  {
    path: "/user/:id",
    element: <UserId />,
  },
  {
    path: "/user/:id/edit",
    element: <UserIdEdit />,
  },

  // chats
  {
    path: "/chats",
    element: <Chats />,
  },
  {
    path: "/chats/:id",
    element: <ChatsId />,
  },

  // invite messages
  {
    path: "/invites",
    element: <InviteMessages />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
