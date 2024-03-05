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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/admin" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TableQestion" element={<Table_Qestion />} />
          <Route path="/Add_Prodcut" element={<Add_Qestion />} />
          <Route path="/EditProduct/:id" element={<Add_Qestion />} />
          <Route path="/qestion" element={<Display_Qestion />} />
          <Route path="/Qestion_info/:id" element={<Qestion_info />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
