import axios from 'axios';

/* Sends a request to PetFinder API */
const searchPetFinder = function(params) {
    axios.get('https://api.petfinder.com/v2/animals', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
      }
    })
    .then((res) => {
      console.log(res.data);
      console.log("animals = " + res.data.animals);

      //TODO: Review data
    })
    .catch((error) => {
      console.error(error)
    })
}

export default searchPetFinder;