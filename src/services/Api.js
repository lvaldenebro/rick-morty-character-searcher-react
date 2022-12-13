const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    //Access to the first 20 characters, which is the same, to the first page
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.results.map((character) => {
            return {
                id: character.id,
                image: character.image,
                name: character.name, //name  + surname
                species: character.species,
                planet: character.origin.name,
                episodes: character.episode.length,
                status: character.status,
            };
        });
        return cleanData;
    });
};
export default getDataFromApi;