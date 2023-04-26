import "./App.css";
// import Demopage from "./components/Demopage";
import Navbar from "./components/Navbar";
import Login from "./components/LoginForm";
import Register from "./components/Register";
// import BookRoom from "./components/BookRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Room from "./components/Room";
import Demopage from "./components/Demopage";
import Bookingpage from "./pages/Bookingpage";
import Profilepage from "./pages/Profilepage";
import Adminpage from "./pages/Adminpage";
import Landingpage from "./pages/Landingpage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route
            path="/book/:id/:fromdate/:todate"
            element={<Bookingpage />}
          ></Route>
          <Route path="/profile" element={<Profilepage />}></Route>
          <Route path="/admin" element={<Adminpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Route path="/home" element={<Room/>}></Route>
