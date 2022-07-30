import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './List.css';

export const AnimalsList = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios
      .get(`https://zoo-animal-api.herokuapp.com/animals/rand/9`)
      .then((res) =>{
        console.log(res) 
        setAnimals(res.data)});
         
  }, []);
  return (

<div className="main_container">
{animals.map((animal) => (
<div >

        <div key={animal.id} className="main_div">
        <Link to={`/animals/${animal.id}`}>
        <h1>{animal.name}</h1>
        <img src={animal.image_link} alt=""  className="img-list"></img>
        </Link>
        <h4>Type :  {animal.animal_type}</h4>
        <h4>lifespan :  {animal.lifespan}</h4>
        <h4>habitat :  {animal.habitat}</h4>
        
      </div>
</div>
        ))}
</div> 
  );
};