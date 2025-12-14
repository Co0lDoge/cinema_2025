import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <MainPage /> */}
      {/* <MoviesPage /> */}
      <UserPage/>
    </>
  );
}

export default App;
