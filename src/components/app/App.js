
import { lazy, Suspense } from "react";
// import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import Navbar from "../navbar/Navbar_panel";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "../alert/Alert";
import AlertState from "../../context/alert/AlertState";
import FirebaseState from "../../context/firebase/FirebaseState";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));


function App() {
  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <div className="app">
            <Navbar />
            <Suspense fallback={Spinner}>
              <div className="container pt-4">
                <Alert />
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </div>
            </Suspense>
          </div>
        </Router >
      </AlertState>

    </FirebaseState>



  );
}

export default App;
