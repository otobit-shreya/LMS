import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<NewsFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
