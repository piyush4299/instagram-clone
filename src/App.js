import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import Feed from "./pages/Feed";
import "./App.css";
import populateDataToStorage from "./helpers/populateDataToStorage";

function App() {
  populateDataToStorage();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/user/:userName" element={<UserProfile />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
