import { Outlet } from "react-router-dom";
import { ArrowUpOutlined} from "@ant-design/icons"
import Header from "./header.js"

import Footer from "./footer.js"

import "./style.css"
import React, { createContext, useContext, useEffect, useState } from "react";
import { get } from "../utils/request.js";
import { CartContext } from "../CartContext/CartContext.js";
import { Tooltip } from "antd";

const userContext = createContext();

const LayoutDefault = function () {
  const [inforUser, setInforUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }



  useEffect(() => {
    const getUserFetch = async () => {
      const user = await get("users/infor")
      if(user.data)
        setInforUser(user.data)
    }

    getUserFetch();
  }, [refresh])

  return (
    <>
    <userContext.Provider value={{inforUser, setRefresh, refresh}}>
      <CartContext>
          {/* Header */}
          <Header></Header>
          {/* Container */}
          <Outlet />
          <Tooltip title="Back to Top" color={"volcano"}>
            <div onClick={handleScroll} className="fixed bg-blue-500 cursor-pointer border-4 font-extrabold border-solid border-blue-800 flex items-center justify-center rounded-full h-14 w-14 text-3xl text-white z-50 bottom-16 right-10">
              <ArrowUpOutlined />
            </div>
          </Tooltip>
          {/* Container */}
          {/* Footer */}
          <Footer></Footer>
      </CartContext>
    </userContext.Provider>
    </>
  );
}

export default LayoutDefault;

export const useUser = () => useContext(userContext)