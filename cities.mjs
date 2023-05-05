// fetch(`https://api.teleport.org/api/cities/?search=Caxias`)
//       .then(response => response.json())
//       .then(data => {
//         let html = ""; 
//         const results = data['_embedded']['city:search-results'];
//         const numResults = results.length;
//         if (numResults === 0) {
//           suggBoxUl.innerHTML = "Nenhum resultado encontrado."; // exibe uma mensagem de erro se a lista de resultados estiver vazia
//           return;
//         }
//         for (let i = 0; i < numResults && i < 4; i++) { // define o limite superior do loop para o número real de resultados
//           const city = results[i]['matching_full_name'];
//           html += `<li>${city}</li>`;
//         }
//         suggBoxUl.innerHTML = html;
//       });