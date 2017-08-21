import React from "react";

const AnimalCard = ({ animal }) => {
  return (
    <div className="col s2">
      <img className="animal-img" src={animal.imageUrl} alt={animal.name} />
      <p className="animal-label">
        {animal.name} ({animal.gender}):
        <br />
        <small>{animal.description}</small>
      </p>
    </div>
  );
};

export default AnimalCard;
