import React from "react";
import AnimalCard from "./AnimalCard";

const AnimalsList = props =>
  <div className="row">
    <h4>
      {props.view}
    </h4>
    <div>
      {props.animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
    </div>
  </div>;

export default AnimalsList;
