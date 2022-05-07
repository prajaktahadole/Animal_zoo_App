import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {
    const nav = [
        {title: "Home", to: "/"},
        {title: "Animals", to: "/animalslist"},
        {title : "Donate", to : "/donate"} ,
        {title : "Ticket" , to : "/ticket"} ,  
        {title: "About", to: "/about"},
    ];
    
    return (
        <div className="navbar-main">
            {nav.map((e,i) =>(
            <button>
                <Link key={i} to={e.to} style={{margin:"45px"}}>
                {e.title}
            </Link>
            </button>
            ))}
        </div>
    );
};