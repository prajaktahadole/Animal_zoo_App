import {Dataa} from "./Dataa";
import './Home.css';
import {Carousel} from "../Carousel/carousel"


export const Home = () => {
    return (
       <div >
           <Carousel></Carousel>
           <h1>Welcome to the wildlife sanctuary  </h1>
            <h1 >Get Ready for an Experience You’ll Always Remember!</h1>
            
            <Dataa></Dataa>
       </div>
    )
}