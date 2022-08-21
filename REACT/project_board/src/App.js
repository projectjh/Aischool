import { Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";
import ReviewView from "./components/ReviewView";
import ReviewWrite from "./components/ReviewWrite";
import ReviewModify from "./components/ReviewModify";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/review" element={<ReviewList />} />
      <Route path="/review/view/:idx" element={<ReviewView />} />
      <Route path="/review/write" element={<ReviewWrite />} />
      <Route path="/review/modify/:idx" element={<ReviewModify />} />
    </Routes>
  );
}

export default App;
