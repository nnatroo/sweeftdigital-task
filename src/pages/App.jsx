import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Components/Modules/App.module.css";
import Users from "../Components/Users/Users";
import UserPage from "../pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
