import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Documentation: https://reactrouter.com/en/v6.3.0/getting-started/overview#navigation

import Login from "./pages/Login";
import Settings from "./pages/Settings";
import MyCalendars from "./pages/MyCalendars";
import Help from "./pages/Help";
import Calendar from "./pages/Calendar";
import { NavigationCotangles } from "@/components/ui/navigation-menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavigationCotangles />
          <Routes>
            {/* If not logged in already, redirect to login, otherwise redirect to my calendars.*/}
            <Route path="/" element={<Login />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="my-calendars" element={<MyCalendars />}>
              <Route path=":calendarId" element={<Calendar />} />
            </Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="help" element={<Help />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
