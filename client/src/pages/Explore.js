import React from "react";

import Filter from "../components/Filter";
import Card from "../components/Card";
import Modal from "../components/Modal"

const Explore = () => {
    return ( 
        <div className="explore">
        <div className="container mx-auto px-1">
          <Filter />
          <Card />
          <Modal />
        </div>
    </div>
     );
}
 
export default Explore;