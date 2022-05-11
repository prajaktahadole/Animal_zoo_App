import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../Image/LOGO.png'

export const Navbar = () => {
    const nav = [
        {title: "Home", to: "/"},
        {title: "Animals", to: "/animalslist"},
        {title : "Donate", to : "/donate"} ,
        {title : "Ticket" , to : "/ticket"} ,  
        {title: "About", to: "/about"},
    ];
    
    return (
        <div>
         <div className="navbar-main">
            <div className="Navbar-left">
                <img src={logo}></img>
            </div>
            <div className="Navbar-right">
            {nav.map((e,i) =>(
            <button>
                <Link key={i} to={e.to} style={{margin:"45px"}}>
                {e.title}
            </Link>
            </button>
            ))}
            </div>
        </div>


        <hr />
        </div>
       
    );
};