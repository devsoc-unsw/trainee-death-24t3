import "./App.css";
import { BrowserRouter, Routes, Route, redirect, Navigate } from "react-router-dom";

// Documentation: https://reactrouter.com/en/v6.3.0/getting-started/overview#navigation

import Login from "./pages/Login";
import Settings from "./pages/Settings";
import MyCalendars from "./pages/MyCalendars";
import Help from "./pages/Help";
import Calendar from "./pages/Calendar";
import { NavigationCotangles } from "@/components/ui/navigation-menu";
import { ContentWrapper } from "./components/ui/content-wrapper";
import { FC, ReactNode } from "react";
import Cookies from "js-cookie"


const ProtectedRoute: FC<{children?: ReactNode}> = ({ children }) => {
  const token = Cookies.get("userinfo"); // Retrieve the token cookie
  console.log(token)

  // If token doesn't exist, redirect to the login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Render the children (protected content) if authenticated
  return children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavigationCotangles />
          <Routes>
            {/* If not logged in already, redirect to login, otherwise redirect to my calendars.*/}
            <Route element={<ContentWrapper/>}>
              <Route path="login" element={<Login />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="my-calendars" element={<ProtectedRoute><MyCalendars /></ProtectedRoute>}></Route>
              <Route path="my-calendars/:calendarId" element={<ProtectedRoute><Calendar /></ProtectedRoute>}></Route>
              <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>}></Route>
              <Route path="help" element={<Help />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;