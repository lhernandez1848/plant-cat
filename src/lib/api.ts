"use server"

export async function getSpecies(page?: number) {
  const data = await fetch(`${process.env.API_BASE_URL}/api/v2/species-list?key=${process.env.API_KEY}&page=${page}`);
  const response = await data.json();
  return response;
}

export async function getFAQs() {
  const data = await fetch(`${process.env.API_BASE_URL}/api/article-faq-list?key=${process.env.API_KEY}&page=1`);
  const response = await data.json();
  return response.data;
}

export async function getSearchResults(search: string) {
  const data = await fetch(`${process.env.API_BASE_URL}/api/v2/species-list?key=${process.env.API_KEY}&q=${search}`);
  const response = await data.json();
  return response.data;
}

export async function getSpeciesDetails(id: number) {
  const data = await fetch(`${process.env.API_BASE_URL}/api/v2/species/details/${id}?key=${process.env.API_KEY}`);
  const response = await data.json();
  return response;
}

export async function getCareTips(id: number) {
  const data = await fetch(`${process.env.API_BASE_URL}/api/species-care-guide-list?key=${process.env.API_KEY}&species_id=${id}`);
  const response = await data.json();
  return response.data;
}

export async function getDiseases(page?: number) {
  const data = await fetch(`${process.env.API_BASE_URL}/api/pest-disease-list?key=${process.env.API_KEY}&page=${page}`);
  const response = await data.json();
  return response;
}

export async function getPlantTypesByQuery(query: string, page?: number) {
  const data = await fetch(`${process.env.API_BASE_URL}/api/v2/species-list?key=${process.env.API_KEY}&${query}&page=${page}&`);
  const response = await data.json();
  return response;
}