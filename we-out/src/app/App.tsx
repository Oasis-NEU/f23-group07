import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";


function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;