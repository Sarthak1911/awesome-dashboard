const games = require("./data/vgSales.json");

export function getAll() {
  return games;
}

export function getAllYears() {
  return [
    ...new Set(
      getAll()
        .map(game => parseInt(game.Year))
        .sort()
    )
  ];
}

export function getGenreWithMostGames() {
  const allGenres = [...new Set(getAll().map(game => game.Genre))];

  let topGenre = "";
  let currentLength = 0;

  for (let genre of allGenres) {
    let totalGames = getAll().filter(game => game.Genre === genre).length;

    if (totalGames > currentLength) {
      currentLength = totalGames;
      topGenre = genre;
    }
  }

  return { genre: topGenre, games: currentLength };
}

export function getAllPlatforms() {
  return [...new Set(getAll().map(game => game.Platform))];
}

export function getPlatformGames(platform) {
  return getAll().filter(game => game.Platform === platform);
}

export function getGamesShare() {
  let gamesShare = [];

  const platforms = getAllPlatforms();

  for (let platform of platforms) {
    let games = getPlatformGames(platform);

    let percentShare = Math.ceil((games.length / getAll().length) * 100);

    gamesShare.push({ [platform]: percentShare });
  }

  return gamesShare;
}

export function getTopShares() {
  const gamesShare = getGamesShare();

  gamesShare.sort((object1, object2) => {
    if (Object.values(object1) > Object.values(object2)) return -1;
    if (Object.values(object1) < Object.values(object2)) return 1;
    return 0;
  });

  return gamesShare
    .slice(0, 3)
    .map(game => [Object.keys(game)[0], Object.values(game)[0]]);
}

export function getGlobalSalesPerPlatform() {
  let sales = [];
  //Get all platforms
  const allPlatforms = getAllPlatforms();
  //Pass it to getGlobalSalesPerYear

  for (let platform of allPlatforms)
    sales.push({ name: [platform], data: getGlobalSalesPerYear(platform) });

  return sales;
}

export function getGlobalSalesSelectedPlatform(...rest) {
  let sales = [];
  //Get all platforms
  const selectedPlatforms = rest;
  //Pass it to getGlobalSalesPerYear

  for (let platform of selectedPlatforms)
    sales.push({ name: [platform], data: getGlobalSalesPerYear(platform) });

  return sales;
}

function getGlobalSalesPerYear(platform) {
  let salesPerYearForPlatform = [];

  //Get games for this platform
  const games = getAll().filter(game => game.Platform === platform);
  const years = [...new Set(games.map(game => game.Year))];

  //Sum of all years
  const sumOfAllYears = games
    .map(game => game.Global_Sales)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  for (let year of years) {
    //Sum of this year
    const gamesForThisYear = games.filter(game => game.Year === year);
    let sumOfThisYear = 0;

    if (gamesForThisYear.length > 0) {
      sumOfThisYear = gamesForThisYear
        .map(game => game.Global_Sales)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

      //Calculate the percentage
      salesPerYearForPlatform.push((sumOfThisYear / sumOfAllYears) * 100);
    }
  }

  return salesPerYearForPlatform.length > 0 ? salesPerYearForPlatform : null;
}
