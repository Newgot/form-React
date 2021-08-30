export const sortCities = (data) => {
  const cities = data.filter(city => city.population > 50000)
    .sort((cityA, cityB) => +cityA.population < +cityB.population ? 1 : -1)
  return [
    cities[0],

    ...cities
      .slice(1, cities.length)
      .sort((cityA, cityB) => cityA.city > cityB.city ? 1 : -1),
  ]
}