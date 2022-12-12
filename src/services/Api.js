const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    //Access to the first 20 characters, which is the same, to the first page
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.results.map((user) => {
            return {
                id: user.id,
                image: user.image,
                name: user.name, //name  + surname
                species: user.species,
                planet: user.origin.name,
                // episodes: user.episode.length,
                status: user.status,
            };
        });
        return cleanData;
    });
};
export default getDataFromApi;