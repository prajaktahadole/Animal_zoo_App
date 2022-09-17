import {Dataa} from "./Dataa";
import './Home.css';
import {Carousel} from "../Carousel/carousel";
import { Box, Heading } from '@chakra-ui/react';

export const Home = () => {
    return (
       <Box  style={{
        width: "100%",
        
      }}>
        < Heading as='h1' size='4xl' margin={"15px"} color={"blue.700"}>Welcome to the Wildlife Sanctuary  </Heading>
           <Carousel></Carousel>
           
            <Heading as='h2' size='xl'margin={"15px"}>Get Ready for an Experience You’ll Always Remember!</Heading>
            
            <Heading margin={"35px"}>Gallery</ Heading>
            <Dataa></Dataa>
       </Box>
    )
}