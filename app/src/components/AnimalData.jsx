import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './a.css';

export const  AimalsData = () => {

  const { id } = useParams();
  const [animal, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get(`https://zoo-animal-api.herokuapp.com/animals/rand/${id}`)
      .then((res) =>{
        console.log(res) 
        setAnimals(res.data)});
         
  }, []);
  return (
                <div>
                      <img src={animal.image_link} alt=""></img>
                      <h1>{animal.name}</h1>
                      <h2>{animal.animal_type}</h2>                 
                </div>
                );
};