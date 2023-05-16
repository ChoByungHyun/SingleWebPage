import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/Login"} element={<Login />} />
      <Route path={"/SignUp"} element={<SignUp />} />
      <Route path={"/Main"} element={<Main />} />
      <Route path={"/"} element={<Landing />} />
    </Routes>
  );
}
export default App;
