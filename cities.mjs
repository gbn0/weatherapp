
const search_term = 'São Pau';
fetch(`https://api.teleport.org/api/cities/?search=${search_term}`)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 8; i++) {
      console.log(data['_embedded']['city:search-results'][i]['matching_alternate_names'][0]['name'])
    }
  }
);