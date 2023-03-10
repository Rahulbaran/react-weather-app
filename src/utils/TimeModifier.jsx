export function getLocalTime(timestamp) {
  const options = {
    hourCycle: "h12",
    hour: "2-digit",
    minute: "2-digit"
  };

  return new Intl.DateTimeFormat(navigator.languages[0], options).format(
    timestamp * 1000
  );
}

export function getLocalDate(date) {
  const options = {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric"
  };

  return new Intl.DateTimeFormat(navigator.languages[0], options).format(date);
}
