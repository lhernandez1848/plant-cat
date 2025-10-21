"use server"

export async function getSpecies(page?: number) {
  const data = await fetch(`${process.env.API_BASE_URL}/api/v2/species-list?key=${process.env.API_KEY}&page=${page}`);
  // const data = await fetch(`https://perenual.com/api/v2/species-list?key=sk-JvtE68c976544bc9412406&page=${page}`);
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