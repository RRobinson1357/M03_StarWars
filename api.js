export async function fetchMovies() {
  try {
    const response = await fetch("https://www.swapi.tech/api/films");
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export async function fetchStarships() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships");
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching starships:", error);
    return [];
  }
}



export async function fetchPlanets() {
  try {
    const response = await fetch("https://www.swapi.tech/api/planets");
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching planets:", error);
    return [];
  }
}

