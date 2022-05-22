import React, { useState, useEffect } from "react";

function useScrollPosition() {

    const [scrollPosition,setScrollPosition] = useState(0);
    
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    useEffect( () =>{
        window.addEventListener('scroll',updatePosition);
        
        return () =>{
            window.removeEventListener('scroll',updatePosition);
        }
    },[]);

  return scrollPosition;
}

export default useScrollPosition;
