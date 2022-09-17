import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box , Flex, Image, Text} from "@chakra-ui/react";
// import { PaginationComponent } from "../Pagination/Pagination";

export const  AnimalsData = () => {

  const { id } = useParams();
  const [animal, setAnimals] = useState({
    name: "",
    latin_name: "",
    animal_type: "",
    active_time: "",
    length_min: "",
    length_max: "",
    weight_min: "",
    weight_max: "",
    lifespan: "",
    habitat: ",,,",
    diet: ",,,,",
    geo_range: "",
    image_link: "",
    id: 0,
  });

  useEffect(() => {
    axios
      .get(`https://zoo-animal-api.herokuapp.com/animals/rand`)
      .then((res) =>{
        setAnimals(res.data)
        console.log(res) });
         
  }, [id]);

  return (
   
    <Flex style={{
      width : "80%",
      margin : "auto",
      marginBottom: "30px",
      marginTop: "30px",
      WebkitBoxShadow: "0px 3px 23px 0px gray",
      boxShadow: "0px 3px 23px 0px gray",
      borderRadius: "15px",
    }}>
   
     <Image
            className="image"
            src={animal.image_link}
            alt="#"
            style={{
              width: "60%",
              objectFit: "cover",
              borderRadius: "15px",
              margin: "5px",
            }}
          />
       
        <Box
          style={{
            width: "40%",
            paddingLeft: "15px",
          }}
        >
          <Text fontSize='6xl'>{animal.name}</Text>

          <Flex>
            <Text fontSize='2xl'>Latin Name</Text>
            <Text fontSize='2xl'>{animal.latin_name}</Text>
          </Flex>

          <Flex>
            <Text fontSize='2xl'>Type</Text>
            <Text fontSize='2xl'>{animal.animal_type}</Text>
          </Flex>

          <Flex >
            <Text fontSize='2xl'>Length</Text>
            <Text fontSize='2xl'>Max : {animal.length_max}</Text>
          </Flex>

          <Flex >
            <Text fontSize='2xl'>Weight</Text>
            <Text fontSize='2xl'>Min : {animal.weight_min}</Text>
          </Flex>

          <Flex>
            <Text fontSize='2xl'>Lifespan</Text>
            <Text fontSize='2xl'>{animal.lifespan}</Text>
          </Flex>

          <Flex >
            <Text fontSize='2xl'>Habitat</Text>
            <Text fontSize='2xl'>{animal.habitat}</Text>
          </Flex>

          <Flex >
            <Text fontSize='2xl'>Dite</Text>
            <Text fontSize='2xl'>{animal.diet}</Text>
          </Flex>

          <Flex >
            <Text fontSize='2xl'>Geo Range</Text>
            <Text fontSize='2xl'>{animal.geo_range}</Text>
          </Flex>

        </Box>
     
     
    </Flex>        
           
                
  );
};