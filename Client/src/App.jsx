import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./client/Pages/NavBar";
import Welcome from "./client/Pages/Welcome";
import Footer from "./client/Pages/Footer";
import EventForYou from "./client/Pages/Pages Components/EventForYou";
import Signup from "./client/Pages/Pages Components/signup";
import Login from "./client/Pages/Pages Components/login";
import Signout from './client/Pages/Signout';
import CreateEvent from "./client/Pages/Pages Components/CreateEvent";
import About from "./client/Pages/Pages Components/About";
import Careers from "./client/Pages/Pages Components/Careers";
import TermsOfService from "./client/Pages/Pages Components/Terms_of_Services";
import Support from "./client/Pages/Pages Components/Support";
import Privacy from "./client/Pages/Pages Components/Privacy";
import ContactUs from "./client/Pages/Pages Components/Contact";
import Error from "./client/Pages/Pages Components/Error";
import ManagerDashboard from "./client/Pages/ManagerDashboard";
import EditEvent from "./client/Pages/Pages Components/EditEvent";
import RegisteredUser from "./client/registeredUser"


const App = () => {
  const [showNavAndFooter, setShowNavAndFooter] = useState(true);
  const location = useLocation();

  return (
    <div>
      {showNavAndFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/eventForYou" element={<EventForYou />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signout" element={<Signout />} />
        <Route path="/managerDashboard" element={<ManagerDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms+of+service" element={<TermsOfService />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact+us" element={<ContactUs />} />
        <Route path="/edit-event/:eventId" element={<EditEvent />} />
        <Route path="/registeredUser" element={<RegisteredUser />} />
        <Route path="/*" element={<Error setShowNavAndFooter={setShowNavAndFooter} />} />
      </Routes>
      {showNavAndFooter && location.pathname !== "/managerDashboard" && <Footer />}
    </div>
  );
};

export default App;
