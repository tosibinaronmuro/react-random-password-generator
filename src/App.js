import { Routes, Route,   } from "react-router-dom";
import Footer from "./components/'Statics/Footer";
import Navigation from "./components/'Statics/Navigation";
import Home from "./components/Home";
function App() {
  return (
    <>
    <Navigation/>

 
    <Routes>
        <Route path="/" element={<Home/>}>
          Home
        </Route>
      </Routes> 
      



      <Footer/>
    </>
  );
}

export default App;
