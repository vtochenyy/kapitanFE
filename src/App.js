import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
            path="/"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            }
        />
      </Routes>
    </div>
  );
}

export default App;
