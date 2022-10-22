import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigaiton/navigation.component.jsx";
import AuthWithUser from "./routes/authWithUser/authWithUser.jsx";
const H1 = () => {
  return (
    <div>
      <h1>I am H1 Page </h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="h1" element={<H1 />} />
        <Route path="auth" element={<AuthWithUser />} />
      </Route>
    </Routes>
  );
};

export default App;
