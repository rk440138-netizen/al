import React from "react";
import Mainpage from "./pages/Mainpage";
import Main from "./components/Main";    
import Home from "./pages/Home";   
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collection from "./pages/Collection";
import Contact  from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",             
      element: <Mainpage/>, 
      children: [
        {
          index: true,       
          element: <Main />, 
        },
        {
      path: "/home",
      element: <Main/>
    },
        {
      path: "/collection",
      element: <Collection/>
    },
        {
      path: "/about",
      element: <About/>
    },
        {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/login",
      element: <Login/>,
    },
      {
      path: "/register",
      element: <Register/>,
    }
    
      ],
     
    },
      
    
    
  ]);

  return <RouterProvider router={router} />;
}
