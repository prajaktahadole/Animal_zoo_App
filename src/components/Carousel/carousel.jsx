import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [

    "https://images.thrillophilia.com/image/upload/s--uSEJiTF7--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/055/651/original/1550304812_shutterstock_1036392316.jpg.jpg?1550304812",
    "https://images.thrillophilia.com/image/upload/s--fuJ_KQSr--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/099/928/original/1509539465_Bharatpur-Bird-Sanctuary.jpg.jpg?1509539465",
    "https://images.thrillophilia.com/image/upload/s--uSEJiTF7--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/055/651/original/1550304812_shutterstock_1036392316.jpg.jpg?1550304812",
    "https://images.thrillophilia.com/image/upload/s--fuJ_KQSr--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/099/928/original/1509539465_Bharatpur-Bird-Sanctuary.jpg.jpg?1509539465",
  
];



export const Carousel = () => {
    const [autoplay, setAutoplay] = useState(true);

  return (
    <>
    <div style={{ width: "95%", MaxHeight: "80%" , margin: "auto"}}  >
        <Slide autoplay={autoplay}>
            {slideImages.map((item) => (
                <div className="each-slide" >
                    <div style={{ width: "100%", height: "auto" }}>
                        <img src={item} style={{ maxWidth: "100%", maxHeight: "100%" ,  objectFit: "cover" }} />
                    </div>
                </div>
            ))}

        </Slide>
    </div >
</>
   
  );
}