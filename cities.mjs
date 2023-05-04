function GetCity(c){
  const search_term = c;
  let emptyArray=[];
  fetch(`https://api.teleport.org/api/cities/?search=${search_term}`)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 4; i++) {
      emptyArray[i] = data['_embedded']['city:search-results'][i]['matching_alternate_names'][0]['name'];
    }}
    
  ); 
  console.log(emptyArray)
  return emptyArray;
}

GetCity('To')