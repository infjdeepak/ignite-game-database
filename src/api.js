//base url
const base_url = `https://api.rawg.io/api/games`;
const key = `?key=${process.env.REACT_APP_RAWG_API}`;
// getting dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const getCurrentYear = () => {
  return new Date().getFullYear();
};
//current date/month/year
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
//games url
const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${key}${popularGames}`;
export const upcomingGamesUrl = () => `${base_url}${key}${upcomingGames}`;
export const newGamesUrl = () => `${base_url}${key}${newGames}`;

//gameDetails
export const gameDetailsUrl = (gameId) => `${base_url}/${gameId}${key}`;
//gameScreenshot
export const gameScreenshotsUrl = (gameId) =>
  `${base_url}/${gameId}/screenshots${key}`;
//searched game details
export const searchedGamesUrl = (search_text) =>
  `${base_url}${key}&search=${search_text}&page_size=10`;
