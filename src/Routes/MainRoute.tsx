import { Route} from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Views/Auth/Login";

export default function MainRoute(){
    return(
        <BrowserRouter>
            
            <Route path='/login' component={Login} />
            <Route path='/' exact component={MainLayout} />
        </BrowserRouter>
        
    );
}