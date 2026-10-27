async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/34");
    if (!response.ok) {
      throw new Error(`Pokemon API request failed: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    //changes in html
    //name
    const nameElement = document.querySelector("#name");
    nameElement.textContent = data.name;
    //types
    const typeElement = document.querySelector("#types");
    typeElement.replaceChildren();
    data.types.forEach((typeData) => {
      const typeDiv = document.createElement("div");
      typeDiv.textContent = typeData.type.name;
      typeDiv.className = `${typeData.type.name}`;
      typeElement.appendChild(typeDiv);
    });
    //img
    const imageUrl = data.sprites.other["official-artwork"].front_default;
    const imgElement = document.querySelector("#img");
    imgElement.src = imageUrl;
    imgElement.alt = data.name;
    //stats
    const statElements = document.querySelectorAll(".stat");
    data.stats.forEach((stat, index) => {
      statElements[index].textContent = `${stat.stat.name}: ${stat.base_stat}`;
    });
    //moves
    let moves = document.querySelector("#moves");
    data.moves.forEach((element, index) => {
      if (
        element.version_group_details[0].move_learn_method.name === "level-up"
      ) {
        moves.innerHTML += `<li>${element.move.name}</li>`;
      }
    });
  } catch (error) {
    console.error(error);
  }
}

fetchPokemon();
