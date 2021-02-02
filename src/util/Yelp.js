const apiKey = 'ciQ8fQ1FXN3z6fYeMWpagAKVaiD1bUXyvc7ruGfla7Upvsil3jAuujKe94pUfnzX9S_GCc0yS92zRP6zigVoZH70s5hV89SAlls46K_20seG0lxdoAyyEYAddNcYYHYx';

const Yelp = {}

function search(term, location, sortBy) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: {
    Authorization: `Bearer ${apiKey}`
  }}).then(response => {
    return response.json();
  });
}