export const sliceTime = (time) => {
  const sliced = time.split("T")[1].split(":00Z")[0];
  return sliced;
};

const formatData = (data) => {
  const sessions = data?.sessions;
  const allSessions = [];

  for (let i = 0; i < sessions?.length; i++) {
    for (let k = 0; k < sessions[i]?.items?.length; k++) {
      allSessions.push({
        movie: sessions[i]?.movie?.name_rus,
        session: sliceTime(sessions[i]?.items[k].session.session_date_tz),
        hall: sessions[i]?.items[k].hall.name,
      });
    }
  }
  console.log(allSessions);
};

export default formatData;
