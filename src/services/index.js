import { BASE_URL, cinemaId, cityId, token } from "../constants";

export const getData = async (date) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/movie/today?city=${cityId}&cinema=${cinemaId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    return;
  }
};
