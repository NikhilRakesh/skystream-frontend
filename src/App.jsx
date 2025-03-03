import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useSnapshot } from "valtio";
import state from "./store";
import Login from "./pages/Login";
import ForgottPassword from "./pages/ForgottPassword";
import ChangePassword from "./pages/ChangePassword";

function App() {
  const [viewPort, setViewPort] = useState(window.innerWidth);

  const snap = useSnapshot(state);
  const handleScroll = () => {
    state.scroolY = window.scrollY;
  };

  useEffect(() => {
    setViewPort(window.innerWidth);
    window.addEventListener("resize", handleScroll);
    if (viewPort < 768) {
      state.deviceType = "Mobile";
    } else if (viewPort < 991) {
      state.deviceType = "Tablet";
    } else {
      state.deviceType = "Desktop";
    }

    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [viewPort]);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/change-password"
              element={
                snap.changePassword ? (
                  <ChangePassword />
                ) : (
                  <Navigate to="/forget-password" />
                )
              }
            />
            <Route
              path="/forgot-password"
              element={
                snap.userData ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <ForgottPassword />
                )
              }
            />
            <Route
              path="*"
              element={snap.userData ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={snap.userData ? <Navigate to="/dashboard" /> : <Login />}
            />
          </Routes>
        </div>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
