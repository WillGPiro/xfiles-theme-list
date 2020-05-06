export const fetchTheTruthIsOutThere = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.results);
};

