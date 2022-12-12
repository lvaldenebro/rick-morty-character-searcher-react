const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.results.map((user) => {
            return {
                image: user.image,
                name: user.name,
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