import { Route, Routes } from "react-router-dom";
import Auth from "./routes/Auth";

import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <Routes>
      <Route path={"/dashboard/*"} element={<Dashboard />}></Route>
      <Route path={"/auth/*"} element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
