import { Route} from "react-router";
import { BrowserRouter } from "react-router-dom";
import OurLocation  from "../Views/Frontend/OurLocation";
import Login from "../Views/Auth/Login";
import AboutUs from "../Views/Frontend/AboutUs";
import BookingPage from "../Views/Frontend/BookingPage";
import Home from "../Views/Frontend/Home";

export default function MainRoute(){
    return(
        <BrowserRouter>
            <Route path='/login' component={Login} />
            <Route path='/location' component={OurLocation}/>
            <Route path='/about' component={AboutUs}/>
            <Route path='/booking' component={BookingPage}/>
            <Route path='/' exact component={Home} />
        </BrowserRouter>
        
    );
}