import { Link } from "react-router-dom";

export const Navbar = () => {
    const nav = [
        {title: "Home", to: "/"},
        {title: "Animals", to: "/animalslist"},
        {title: "About", to: "/about"},    
    ];
    
    return (
        <div>
            {nav.map((e,i) =>(
            <Link key={i} to={e.to} style={{margin:"5px"}}>
                {e.title}
            </Link>
            ))}
        </div>
    );
};