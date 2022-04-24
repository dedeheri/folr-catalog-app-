import { Route, Routes } from "react-router-dom";
import Auth from "./routes/Auth";

import Dashboard from "./routes/Dashboard";
import Main from "./routes/Main";

/* eslint eqeqeq: 0 */
// eslint-disable-next-line
function App() {
  return (
    <Routes>
      <Route path={"/dashboard/*"} element={<Dashboard />}></Route>
      <Route path={"/auth/*"} element={<Auth />}></Route>
      <Route path={"/*"} element={<Main />}></Route>
    </Routes>
  );
}

export default App;
