import Nav from './components/Nav';
import ChatBox from './components/ChatBox/ChatBox'
import { Outlet } from "react-router-dom";
import React from 'react';
import './index.css';

function App() {

  return (
    <React.Fragment>
        <div className="relative bg-cover bg-center min-h-screen pagebg">
          <div className="xl:mt-2 xl:mb-4 relative my-auto rounded-lg pb-4 w-full xs:w-full lg:w-[1050px] xl:w-[1200px] mx-auto mainbg drop-shadow-2xl border-t-4 border-topborder">
            <Nav />
            <Outlet />
          </div>
            <ChatBox />
        </div>
    </React.Fragment>
  );
}

export default App;
