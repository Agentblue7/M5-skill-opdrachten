async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/34");
    if (!response.ok) {
      throw new Error(`Pokemon API request failed: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    //changes in html
    const nameElement = document.querySelector("#name");
    nameElement.textContent = data.name;
    //img
    const imageUrl = data.sprites.other['official-artwork'].front_default;
    const imgElement = document.querySelector("#img");
    imgElement.src = imageUrl;
    imgElement.alt = data.name;

  } catch (error) {
    console.error(error);
  }
}

fetchPokemon();
