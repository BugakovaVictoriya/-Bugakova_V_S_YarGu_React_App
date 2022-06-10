import { Routes, Route} from "react-router-dom";
import { Films } from "./components/films/Films";
import { People } from "./components/people/People";
import { Locations } from "./components/locations/Locations";
import { Species } from "./components/species/Species";
import { Vehicles } from "./components/vehicles/Vehicles";
import {Header} from "./components/Header";
import Footer from "./components/Footer";
import PreloaderGrand from "./components/api/PreloaderGrand"
import "./css/App.css"
import { useLocation } from "react-router";
import { useTransition} from 'react-spring'


function App() {
    const location = useLocation()
    const transitions = useTransition(location, {})

   return transitions((props, item) => (
    <div className="wrapper">
        <PreloaderGrand />
        <Routes location={item}>
            <Route path="/" element={<Header />}>
                <Route index element={<Films />} />
                <Route path="/people" element={<People />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/species" element={<Species />} />
                <Route path="/vehicles" element={<Vehicles />} />
            </Route>
        </Routes>
        <Footer />
    </div>
   ))
}

 export default App;
