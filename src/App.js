import './App.css';
import MapComponent from './components/MapComponent';
import {listings} from "./data/listings"
import Navbar from './Navbar';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Joblistingspage from './pages/Joblistingspage';
import Profilepage from './pages/Profilepage';
import Relaxpage from './pages/Relaxpage';
import Skillspage from './pages/Skillspage';

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 37.3352,
  lng: -121.8811,
}

const mapOptions = {
  disableDefaultUI : true,
  styles : [ 
    {
      featureType: "poi",
      elementType: "all",
      stylers: [ { "visibility": "off" } ]
    }
  ]
}

function App() {
  let DisplayPage
  switch (window.location.pathname) {
    case "/":
      DisplayPage = App
      break
    case "/about":
      DisplayPage = Aboutpage
      break
    case "/joblistings":
      DisplayPage = Joblistingspage
      break
    case "/skills":
      DisplayPage = Skillspage
      break
    case "/relax":
      DisplayPage = Relaxpage
      break
    case "/profile":
      DisplayPage = Profilepage
      break
    case "/contact":
      DisplayPage = Contactpage
      break 
  }

  return (
    <div> 
    <>
      {/* <MapComponent mapContainerStyle={mapContainerStyle} center={center} zoom={15} listings={listings} options={mapOptions}/> */}
      <Navbar />
      <DisplayPage />
    </>
    </div>
  )
}

export default App;
