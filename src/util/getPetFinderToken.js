/*  Retrieves PetFinder access token by sending Client ID and CLient Secret. 
    PetFinder API uses OAuth for authentication. */
const getPetFinderToken = function() {
  const url = "https://api.petfinder.com/v2/oauth2/token";
  const xhr = new XMLHttpRequest();
  const data = "grant_type=client_credentials&client_id="+process.env.REACT_APP_PETFINDER_CLIENT_ID+"&client_secret="+process.env.REACT_APP_PETFINDER_CLIENT_SECRET;

  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(JSON.parse(xhr.responseText).access_token); //token only
    }
  };
  xhr.send(data);
}

export default getPetFinderToken;