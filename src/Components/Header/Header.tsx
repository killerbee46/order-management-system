import { Image, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import './Header.css';


export default function Header(){
    return(
        <div className='nav'>
            <a href="/">
            <Image preview={false} className='logo' src='https://fullstop360.com/blog/wp-content/uploads/2020/10/PURPOSE-OF-THE-LOGO.jpg'/>
            </a>
            <Menu className='nav-menu'>
                <MenuItem><a href="/">Home</a></MenuItem>
                <MenuItem><a href="/about">About Us</a></MenuItem>
                <MenuItem><a href="/contact">Contact</a></MenuItem>
                <MenuItem><a href="/location">Location</a></MenuItem>
                <MenuItem><a href="/booking">Book Now</a></MenuItem>
            </Menu>
            <Menu className='auth-check'>
                <MenuItem><a href="/login">Login</a></MenuItem>
            </Menu>
            
        </div>
    );
}