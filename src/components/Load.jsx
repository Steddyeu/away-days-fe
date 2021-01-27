import Loader from "react-loader-spinner";
import React from 'react'

export default function Load() {
 
    return (
      <Loader
        type="Puff"
        color="rgb(13, 99, 32)"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  
}
