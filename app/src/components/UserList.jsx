import { useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";

export const UsersList = () => {
    const [users, setUsers] = useState([]);

    useState(() =>{
        axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/`)
        .then(({data})=>{
            console.log(data)
            setUsers(data);
        });
    }, [])
    return (
        <div>
            {users.map((user) => (
                <p key={user.id}>
                    <Link to={`/users/${user.id}`}>
                    {user.id}. {user.name}
                    </Link>
                </p>
            ))}
        </div>
    );
};