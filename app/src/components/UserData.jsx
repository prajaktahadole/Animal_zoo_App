import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export const UserData = () => {  

    const { id } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/${id}`)
        .then(({data}) => {
            setUser(data);
        });
        
    }, [])
    return (
        <div>
            <img src={user.image_link} alt="" />
            <h3>Name: {user.name}</h3>
            <h3>Type of Animal: {user.animal_type}</h3>
        </div>
    );
};