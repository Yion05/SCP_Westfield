import { Outlet } from "react-router";
import "./style/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Dashboard from "./app/dashboard";
function App() {
  return (
    <>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
