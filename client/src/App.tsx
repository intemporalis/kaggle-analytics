import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import "./styles/global.scss";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import YoutubeStats from './pages/youtubeStats/YoutubeStats.tsx';
import ChannelStats from './pages/channelStats/ChannelStats.tsx';


function App() {
  //const [count, setCount] = useState(0)

  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/channels",
          element: <YoutubeStats/>
        },
        {
          path: "/channel/:id",
          element: <ChannelStats/>
        },
      ]
    }
  ]);

  

  return <RouterProvider router={router} />;
}

export default App
