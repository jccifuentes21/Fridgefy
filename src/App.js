import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/UI/Navbar";
import WelcomePage from "./pages/WelcomePage";
import RecipesPage from "./pages/RecipesPage";
import MyShoppingList from "./pages/MyShoppingList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/shopping-list" element={<MyShoppingList />} />
      </Routes>
    </>
  );
}

export default App;
