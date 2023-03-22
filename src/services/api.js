const getDataApi = (house) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
          return {
          id: eachCharacter.id,
          name: eachCharacter.name,
          species: eachCharacter.species,
          house: eachCharacter.house,
          image:  eachCharacter.image
              ? eachCharacter.image
              : `https://via.placeholder.com/180x240/cccccc/000000?text=Harry+Potter+Character`,
          alive: eachCharacter.alive,
          gender: eachCharacter.gender,
        };
      });
      return cleanData;
    });
};
export default getDataApi;
