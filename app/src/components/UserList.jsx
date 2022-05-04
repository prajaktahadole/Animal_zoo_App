import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const  UsersList = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios
      .get(`https://zoo-animal-api.herokuapp.com/animals/rand/10`)
      .then((res) =>{
        console.log(res) 
        setAnimals(res.data)});
         
  }, []);
  return (

<div>
{animals.map((animal) => (

                <div key={animal.id} className="main">

                   <Link to={`/users/${animal.id}`}>
                      <img src={animal.image_link}></img>
                      <h1>{animal.name}</h1>
                      <h3>{animal.animal_type}</h3>
                     
                    </Link>
                </div>
                 ))}
</div>


  
  );
};