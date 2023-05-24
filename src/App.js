import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Table_lieu from "./components/Table_lieu";
import Add_lieu from "./components/Add_lieu";
import Display_lieu from "./components/Display_lieu";
import Lieu_info from "./components/Lieu_info";

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
            <Route path="/TableLieu" element={<Table_lieu />} />
            <Route path="/Add_lieu" element={<Add_lieu />} />
            <Route path="/EditLieu/:id" element={<Add_lieu />} />
            <Route path="/lieux" element={<Display_lieu />} />
            <Route path="/lieu_info/:id" element={<Lieu_info />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
