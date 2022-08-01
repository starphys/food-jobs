import './App.css';
// import MapComponent from './components/MapComponent';
// import {listings} from "./data/listings"
import Navbar from "./Navbar";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Joblistingspage from './pages/Joblistingspage';
import Profilepage from './pages/Profilepage';
import Relaxpage from './pages/Relaxpage';
import Skillspage from './pages/Skillspage';
// to bring all the routes in one place:
import {Route, Routes} from "react-router-dom"

// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

// const center = {
//   lat: 37.3352,
//   lng: -121.8811,
// }

// const mapOptions = {
//   disableDefaultUI : true,
//   styles : [ 
//     {
//       featureType: "poi",
//       elementType: "all",
//       stylers: [ { "visibility": "off" } ]
//     }
//   ]
// }

function App() {
  return (
    <>
      <Navbar />
      <div className="box">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/joblistings" element={<Joblistingspage />} />
          <Route path="/skills" element={<Skillspage />} />
          <Route path="/relax" element={<Relaxpage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
        </div>
      
    </>
  )
}

export default App;