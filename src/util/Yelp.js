const apiKey = 'ciQ8fQ1FXN3z6fYeMWpagAKVaiD1bUXyvc7ruGfla7Upvsil3jAuujKe94pUfnzX9S_GCc0yS92zRP6zigVoZH70s5hV89SAlls46K_20seG0lxdoAyyEYAddNcYYHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json().then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          });
        }
      });
    });
  }
}

export default Yelp;