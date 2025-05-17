import App from './App';
import Signin from './components/Auth/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Register from './components/Auth/Register';
const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            />
        </>
    );
};

export default Layout;