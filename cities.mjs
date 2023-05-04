
export function GetCity(c, ind){
  const search_term = c;
  const sug = '';
  fetch(`https://api.teleport.org/api/cities/?search=${search_term}`)
  .then(response => response.json())
  .then(data => {
      sug = (data['_embedded']['city:search-results'][ind]['matching_alternate_names'][0]['name'])
    }
);
    return sug
}