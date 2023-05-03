const name = 'Canoas';
const url = 'https://api.api-ninjas.com/v1/city?name=' + name;
const apiKey = 'h6cYnK2JVkfo6CgWp9082Q==qGJ7yWD5VvrBlY91';

fetch(url, {
  headers: { 'X-Api-Key': apiKey }
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // const lati = data.[moeda_dois]
  }
    );