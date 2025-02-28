import './App.css';
import { ToastContainer, toast, Slide } from 'react-toastify';


function App() {
  return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={6500}
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


        <header className="bg-white z-50 fixed container flex justify-between px-5 py-5 border-b-gray-200 border-solid border-b-2">
            <div className="header-left flex justify-between items-center">
              <img className="avatar size-16" src={"/dauBep.png"} alt="Example" />
              <h2 className="text-3xl font-bold mx-4 text-pink-500">Chefify</h2>
              <div className="search w-96 relative">
                <input className="rounded-lg bg-slate-100 border-blue-200 w-full px-10 py-2.5 " placeholder="Enter your keywords" />
                <i className="fa-solid fa-magnifying-glass absolute top-1/3 left-3.5"></i>
              </div>
            </div>
            <div className="header-right flex items-center">
                <ul className="pl-0 px-6">
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">What to cook</li>
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">Recipes</li>
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">Ingredients</li>
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">Occasions</li>
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">About us</li>
                </ul>
                <div className="flex items-center justify-center mx-9 px-4 rounded-xl py-3 bg-pink-100">
                  <i className="fa-regular fa-image relative top-0.5 text-pink-500"></i>
                  <h2 className="text-base px-3 text-pink-500 font-semibold">Your Recipes Box</h2>
                </div>
                <div className="avatar">
                  <img className="avatar size-12 rounded-full" src={"/avatar.png"} alt="Example" />
                </div>
            </div>
        </header>
       
        <div className="container pt-24">
          <div className="flex justify-center items-center h-96 bg-pink-500">
            <div className="text-white text-center">
              <h2 className="text-5xl font-bold">What to cook this week?</h2>
              <p className="text-2xl">Discover our delicious recipes and cook like a pro</p>
              <div className="flex justify-center items-center">
                <button onClick={() => toast("Default nha mấy cha", 
                  {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Slide,
                  }
                )} className="bg-white px-6 py-2 rounded-lg text-black font-bold mt-5">Default</button>
                <button onClick={() => toast.error("Thông báo lỗi")} className="bg-white px-6 py-2 rounded-lg text-red-500 font-bold mt-5 ml-5">Error</button>
                <button onClick={() => toast.success("Thông báo thành công")} className="bg-white px-6 py-2 rounded-lg text-green-500 font-bold mt-5 ml-5">Success</button>
                <button onClick={() => toast.info("Thông báo thông tin")} className="bg-white px-6 py-2 rounded-lg text-blue-500 font-bold mt-5 ml-5">Info</button>
                <button onClick={() => toast.warning("Thông báo cảnh báo")} className="bg-white px-6 py-2 rounded-lg text-yellow-500 font-bold mt-5 ml-5">Warning</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="grid grid-flow-row grid-cols-12 gap-2 px-16 py-9 bg-black text-white">
          <div className="col-span-6 ">
            <h2 className="font-bold mb-3">About Us</h2>
            <p className="w-3/4 text-justify">Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
            <div className="flex items-center mt-3">
                <input className="px-3 py-2 w-3/5 rounded-lg" placeholder="Enter your Email" />
                <button className="bg-pink-500 mx-5 px-3 py-2 rounded-md">Send</button>
            </div> 
          </div>
          <div className="col-span-1 row-span-2"> 

          </div>
          <div className="col-span-3">
            <h2 className="font-bold">Learn more</h2>
            <div className="my-2 hover:text-pink-500 cursor-pointer">Our Cooks</div>
            <div className="my-2 hover:text-pink-500 cursor-pointer">See Our Features</div>
            <div className="my-2 hover:text-pink-500 cursor-pointer">FAQ</div>
          </div>

          <div className="col-span-2 row-span-2">
            <h2 className="font-bold">Recipes</h2>
            <div className="my-2 hover:text-pink-500 cursor-pointer">What to cook this week</div>
            <div className="my-2 hover:text-pink-500 cursor-pointer">Pasta</div>
            <div className="my-2 hover:text-pink-500 cursor-pointer">Dinner</div>
            <div className="my-2 hover:text-pink-500 cursor-pointer">Healthy</div>
            <div className="my-2 hover:text-pink-500 cursor-pointer">Vegetarian</div>
            <div className="my-2 hover:text-pink-500 cursor-pointer">Vegan</div>
            <div className="my-2 hover:text-pink-500 cursor-pointer">Christmas</div>
          </div>

          <div className="col-span-6 flex items-end">
            <div className="flex items-center">
              <img className="avatar size-16 " src={"/dauBepTrang.png"} alt="Example" />
              <h2 className="font-bold mx-4 text-3xl">Chefify</h2>
              <div className="mx-4 text-xs font-bold relative top-1">2023 Chefify Company</div>
              <div className="mx-4 text-xs font-bold relative top-1">Terms of Servicel Privacy Policy</div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="relative bottom-0 mt-5">
              <h2 className="font-bold">Shop</h2>
              <div className="my-2 hover:text-pink-500 cursor-pointer">Gift Subscription</div>
              <div className="my-2 hover:text-pink-500 cursor-pointer">Send Us Feedback</div>
            </div>
          </div>

        </footer>

      </> 
  );
}

export default App;
