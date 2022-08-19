import { Route, Routes } from "react-router-dom";
import Review from "./components/Review";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}

export default App;
