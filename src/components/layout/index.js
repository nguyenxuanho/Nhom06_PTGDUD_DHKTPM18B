import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

import Header from "./header.js"

import Footer from "./footer.js"

import "./style.css"

const LayoutDefault = function () {


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      {/* Header */}
      <Header></Header>

      {/* Container */}

      <Outlet />

      {/* Container */}


      {/* Footer */}

      <Footer></Footer>


    </>
  );
}

export default LayoutDefault;