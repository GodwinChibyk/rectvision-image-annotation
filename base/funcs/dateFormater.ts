export const localDateFormater = (date: Date|string) => {
  const event = new Date(date);
  const options: any = {
    // weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return event.toLocaleDateString(undefined, options);
};

export const localDateFormaterLong = (date: Date|string) => {
  const event = date ? new Date(date) : new Date(Date.now());
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return event.toLocaleDateString(undefined, options);
};
