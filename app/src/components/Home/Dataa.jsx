import { useState, useEffect } from "react";
import axios from "axios";
import './Home.css';


export const Dataa = () => {
  const [animals, setAnimals] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios({
      method: "GET",
      url : 'https://zoo-animal-api.herokuapp.com/animals/rand/9',
      params :{
        _page : page,
          _limit : 9,
      }
    })
      
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