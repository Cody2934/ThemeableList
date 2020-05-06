export const fetchCharacter = id => {
  return fetch (`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(json => ({
      image: json.image,
      name: json.name,
      species: json.species,
      status: json.status,
    }));
};
