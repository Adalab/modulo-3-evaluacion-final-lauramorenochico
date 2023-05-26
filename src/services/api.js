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
          image: eachCharacter.image
            ? eachCharacter.image
            : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2ZSJCrmgtfty39MRe6-TWfvtx0XBi2LY-Q&usqp=CAU`,
          alive: eachCharacter.alive,
          gender: eachCharacter.gender,
          patronus: eachCharacter.patronus,
        };
      });
      return cleanData;
    });
};
export default getDataApi;
