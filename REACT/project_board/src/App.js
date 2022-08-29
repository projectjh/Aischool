import { Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";
import ReviewView from "./components/ReviewView";
import ReviewWrite from "./components/ReviewWrite";
import ReviewModify from "./components/ReviewModify";
import LikeStorage from "./components/LikeStorage";
import ReviewStorage from "./components/ReviewStorage";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/review" element={<ReviewList />} />
      <Route path="/review/view/:idx" element={<ReviewView />} />
      <Route path="/review/write" element={<ReviewWrite />} />
      <Route path="/review/modify/:idx" element={<ReviewModify />} />
      <Route path="/storage/like" element={<LikeStorage />} />
      <Route path="/storage/review" element={<ReviewStorage />} />
    </Routes>
  );
}

export default App;
