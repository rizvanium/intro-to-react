import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            animal={pet.animal}
            name={pet.name}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            breed={pet.breed}
          />
        ))
      )}
    </div>
  );
};

export default Results;
