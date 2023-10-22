import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;