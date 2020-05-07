export const fetchTheTruthIsOutThere = (page = 1) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
    .then(res => res.json())
    .then(json => json.results);
};

