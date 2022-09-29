export const getData = async (date) => {
  try {
    const response = await fetch(
      `https://api.kino.kz/sessions/v1/cinema/sessions?cinema_id=99&date=${date}&filter_by=movie`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    return;
  }
};
