import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Table_Qestion from "./components/Table_Qestion";
import Add_Qestion from "./components/Add_Qestion";
import Qestion_info from "./components/Qestion_info";
import Display_Qestion from "./components/Display_Qestion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Paths } from "./navigation/Path.ts";
import ContactPage from "./components/Contact.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={Paths.HOME}exact element={<Home />} />
          <Route path={Paths.SIGNUP} element={<Signup />} />
          <Route path={Paths.SIGNUP_ADMIN} element={<Signup />} />
          <Route path={Paths.LOGIN} element={<Login />} />
          <Route path={Paths.TABLE_QESTION} element={<Table_Qestion />} />
          <Route path={Paths.ADD_Qestion} element={<Add_Qestion />} />
          <Route path={Paths.EDIT_Qestion} element={<Add_Qestion />} />
          <Route path={Paths.QESTION} element={<Display_Qestion />} />
          <Route path={Paths.QESTION_INFO} element={<Qestion_info />} />
          <Route path={Paths.CONTACT} element={<ContactPage />} />


        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
