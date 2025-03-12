import { Outlet } from "react-router-dom";

import Header from "./header.js"

import Footer from "./footer.js"

import "./style.css"
import { createContext, useContext, useEffect, useState } from "react";
import { get } from "../utils/request.js";

const userContext = createContext();

const LayoutDefault = function () {
  const [inforUser, setInforUser] = useState({});
  const [refresh, setRefresh] = useState(false);

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
        {/* Header */}
        <Header></Header>

        {/* Container */}

        <Outlet />

        {/* Container */}


        {/* Footer */}

        <Footer></Footer>
    </userContext.Provider>
    </>
  );
}

export default LayoutDefault;

export const useUser = () => useContext(userContext)