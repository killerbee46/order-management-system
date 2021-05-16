import { Route} from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Header from "../Components/Header/Header";

export default function MainRoute(){
    return(
        <BrowserRouter>
            
            <Route path='/login' component={Login} />
            <Route path='/' exact component={Header} />
        </BrowserRouter>
        
    );
}