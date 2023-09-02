import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

function App() {
   return (
      <Suspense>
         <Routes>
            <Route path="/" element={<DashboardPage />}></Route>
            <Route path="/sign-up" element={<SignUpPage />}></Route>
            <Route path="/sign-in" element={<SignInPage />}></Route>
         </Routes>
      </Suspense>
   );
}

export default App;
