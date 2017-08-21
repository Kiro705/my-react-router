import React from "react";

const AnimalProfile = ({ allAnimals, id }) => {
  const selectedAnimal = allAnimals.find(animal => animal.id === +id);
  if (!selectedAnimal) return null;

  const { name, species, gender, description, imageUrl } = selectedAnimal;

  return (
    <div className="row">
      <h4>
        {name}
      </h4>
      <br />
      <div className="col s4 offset-s4">
        <img className="animal-img" src={imageUrl} alt={name} />
        <p className="animal-label">
          {name} is a {gender === "M" ? "male" : "female"} {description} {species}. <br />
          I am a very nice {species}. <br />
          Take me home today!
        </p>
      </div>
    </div>
  );
};

export default AnimalProfile;
