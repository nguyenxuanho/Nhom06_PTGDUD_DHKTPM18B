import './App.css';

function App() {
  return (
      <>
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
        <div className="pt-32 container px-40 grid grid-flow-row grid-cols-12 gap-16 mb-36">
          <div className="col-span-4">
            <div className="rounded-lg border-2 border-gray-300 border-solid">
              <div className="flex items-center  p-4">
                <i className="fa-solid fa-bars text-2xl "></i>
                <h2 className="uppercase font-bold text-xl relative -top-px px-2">Filters</h2>
              </div>
              <div className='flex items-center justify-between p-4'>
                <h3 className="text-lg font-semibold">Type</h3>
                <i className="fa-solid fa-chevron-up text-pink-500 font-bold text-xl cursor-pointer"></i>
              </div>
              <div className=" p-4 grid grid-flow-row grid-cols-2 pb-6 border-b-2 border-solid border-b-gray-200">
                <div className="col-span-1 flex items-center my-2">
                  <input type="checkbox" id="1" className="size-4"/>
                  <label htmlFor="1" className="mx-0 cursor-pointer">Pan-fried</label>
                </div>
                <div className="col-span-1 flex items-center my-2">
                  <input type="checkbox" id="2" className="size-4"/>
                  <label htmlFor="2" className="mx-0 cursor-pointer">Stir-fried</label>
                </div>
                <div className="col-span-1 flex items-center my-2">
                  <input type="checkbox" id="3" className="size-4"/>
                  <label htmlFor="3" className="mx-0 cursor-pointer">Grilled</label>
                </div>
                <div className="col-span-1 flex items-center my-2">
                  <input type="checkbox" id="4" className="size-4"/>
                  <label htmlFor="4" className="mx-0 cursor-pointer">Roasted</label>
                </div>
                <div className="col-span-1 flex items-center my-2">
                  <input type="checkbox" id="5" className="size-4"/>
                  <label htmlFor="5" className="mx-0 cursor-pointer">Sauteed</label>
                </div>
                <div className="col-span-1 flex items-center my-2">
                  <input type="checkbox" id="6" className="size-4"/>
                  <label htmlFor="6" className="mx-0 cursor-pointer">Baked</label>
                </div>
                <div className="col-span-1 flex items-center my-2">
                  <input type="checkbox" id="7" className="size-4"/>
                  <label htmlFor="7" className="mx-0 cursor-pointer">Steamed</label>
                </div>
                <div className="col-span-1 flex items-center my-2">
                  <input type="checkbox" id="8" className="size-4"/>
                  <label htmlFor="8" className="mx-0 cursor-pointer">Stewed</label>
                </div>
           
               
              </div>
              <div className=' p-4 flex items-center justify-between mt-2'>
                <h3 className="text-lg font-semibold">Time</h3>
                <i className="fa-solid fa-chevron-up text-pink-500 font-bold text-xl cursor-pointer"></i>
              </div>
              <div className=" p-4 mt-3 border-b-2 border-solid border-b-gray-200 pb-6">
                <input className="w-full cursor-pointer" type="range" id="range1" min="0" max="100" step="1"/>
              </div>

              <div className=' p-4 flex items-center justify-between'>
                <h3 className="text-lg font-semibold">Rating</h3>
                <i className="fa-solid fa-chevron-up text-pink-500 font-bold text-xl cursor-pointer"></i>
              </div>
              <div className=" p-4 pb-6 border-b-2 border-solid border-b-gray-200">
                <div className="flex items-center my-2">
                  <input type="checkbox" id="9" className="size-4"/>
                  <label htmlFor="9" className="cursor-pointer">
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                  </label>
                </div>
                <div className="flex items-center my-2">
                  <input type="checkbox" id="10" className="size-4"/>
                  <label htmlFor="10" className="cursor-pointer">
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                  </label>
                </div>
                <div className="flex items-center my-2">
                  <input type="checkbox" id="11" className="size-4"/>
                  <label htmlFor="11" className="cursor-pointer">
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                  </label>
                </div>
                <div className="flex items-center my-2">
                  <input type="checkbox" id="12" className="size-4"/>
                  <label htmlFor="12" className="cursor-pointer">
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                  </label>
                </div>
                <div className="flex items-center my-2">
                  <input type="checkbox" id="13" className="size-4"/>
                  <label htmlFor="13" className="cursor-pointer">
                    <i className="fa-solid fa-star mx-2 text-2xl text-yellow-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                    <i className="fa-solid fa-star mx-2 text-2xl text-gray-300"></i>
                  </label>
                </div>
                
           
               
              </div>

              <div className="px-4 py-8 text-center">
                <button htmlType="button" className="w-full bg-pink-500 text-white py-2 rounded-xl">Apply</button>
              </div>

            </div>
          </div>
          <div className="col-span-8 text-center mt-16">
            <h1 className="text-4xl font-bold">Sorry, no results were found for "ahsdhjkb"</h1>
            <img className="mx-auto w-3/6 mt-6" src={"/nofound.png"} alt="NoFound"/>
            <h2 className="mb-7 text-2xl font-normal text-gray-600">We have all your independence Day sweets covered.</h2>
            <div className="flex items-center justify-center">
              <button htmlType="button" className="mx-2 bg-pink-100 text-pink-500 px-4 py-2 rounded-3xl">Sweet Cake</button>
              <button htmlType="button" className="mx-2 bg-violet-100 text-violet-500 px-4 py-2 rounded-3xl">Black Cake</button>
              <button htmlType="button" className="mx-2 bg-pink-100 text-pink-500 px-4 py-2 rounded-3xl">Pozole Cake</button>
              <button htmlType="button" className="mx-2 bg-green-100 text-green-800 px-4 py-2 rounded-3xl">Healthy Food</button>
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
