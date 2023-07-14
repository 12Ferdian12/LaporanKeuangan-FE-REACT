import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import MasterPage from "./pages/layout/MasterPage";
import KategoriesPage from "./pages/kategori";
// other imports

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* your other routes */}
        <Route path="/" element={<MasterPage />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" Component={HomePage} />
          <Route path="category" Component={KategoriesPage} />
        </Route>
        <Route path="" Component={NotFoundPage} />
      </Routes>
    </Router>
  );
};

export default App;
