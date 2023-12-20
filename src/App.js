import { BrowserRouter } from "react-router-dom";
//Navigate , Routes, Route
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import TeamCaller from "./compCaller/TeamCaller";
import MidBox from "./components/MidBox/MidBox";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Features />
      <TeamCaller />
      <MidBox />
      <Footer />
    </BrowserRouter>
  );
};
export default App;
