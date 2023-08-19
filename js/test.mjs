let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = await fetch("https://pokeapi.co/api/v2/pokemon/10", { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.json();
   console.log(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']);

// https://www.youtube.com/watch?v=wXjSaZb67n8