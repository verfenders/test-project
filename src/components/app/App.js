
import { lazy, Suspense } from "react";
// import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import Navbar from "../navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Suspense fallback={Spinner}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>


      </div>
    </Router >

  );
}

export default App;
