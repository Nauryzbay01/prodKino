import { sliceTime, sortByTime } from "./getFormatData";

export default function combineSeances(data) {
  const sessions = [];
  if (data["Standard"]) {
    for (let i = 0; i < data["Standard"].seances.length; i++) {
      sessions.push(data["Standard"].seances[i].start_time);
    }
  }

  if (data["Dolby Atmos"]) {
    for (let i = 0; i < data["Dolby Atmos"].seances.length; i++) {
      sessions.push(data["Dolby Atmos"].seances[i].start_time);
    }
  }

  if (data["First Class"]) {
    for (let i = 0; i < data["First Class"].seances.length; i++) {
      sessions.push(data["First Class"].seances[i].start_time);
    }
  }

  if (data["IMAX"]) {
    for (let i = 0; i < data["IMAX"].seances.length; i++) {
      sessions.push(data["IMAX"].seances[i].start_time);
    }
  }

  if (data["Comfort"]) {
    for (let i = 0; i < data["Comfort"].seances.length; i++) {
      sessions.push(data["Comfort"].seances[i].start_time);
    }
  }

  const sliced = sessions.map((session) => sliceTime(session));

  const upcoming = sliced.filter((session) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (session.slice(0, 2) === "00") return session;
    if (hours < parseInt(session.slice(0, 2))) {
      return session;
    } else if (hours === parseInt(session.slice(0, 2))) {
      if (minutes <= parseInt(session.slice(3))) {
        return session;
      }
    }
    return null;
  });

  return sortByTime(upcoming);
}
