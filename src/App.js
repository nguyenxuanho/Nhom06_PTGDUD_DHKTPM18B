import { Slide, ToastContainer } from 'react-toastify';
import './App.css';
import AllRoutesClient from './components/allRoutes';

function App() {

  return (
    <>
      <ToastContainer
          position="bottom-right"
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
      <AllRoutesClient />
    </>
  );
}

export default App;
