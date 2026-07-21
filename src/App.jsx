import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;