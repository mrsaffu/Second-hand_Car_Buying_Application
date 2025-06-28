import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import MyBookings from "./pages/MyBookings";
import { useLocation } from "react-router-dom";
import Car from "./pages/Car";
import Footer from "./Components/Footer";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageCars from "./pages/owner/ManageCars";
import Layout from "./pages/owner/Layout";
import ManageBookings from "./pages/owner/ManageBookings";
import Login from "./Components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      {showLogin && <Login setShowLogin={setShowLogin} />}

      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/car-details/:id" element={<CarDetails />} />

        <Route path="/cars" element={<Car />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>
      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;
