import { useState, useEffect } from "react";
import axios from "axios";
import './a.css';


export const Dataa = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios
      .get(`https://zoo-animal-api.herokuapp.com/animals/rand/10`)
      .then((res) =>{
        console.log(res) 
        setAnimals(res.data)});
         
  }, []);
  return (

<div className="main_container_data">
{animals.map((animal) => (
<div className="main_home">

        <img src={animal.image_link} alt=""></img>
      
</div>
        ))}
</div> 
  );
};