import { useEffect, useState } from "react";
import moment from "moment-timezone";

function Clock() {
  const timeFormat = new Intl.DateTimeFormat([], {
    timeZone: "Europe/Warsaw",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
  const [time, setTime] = useState(timeFormat.format(new Date()));

  useEffect(() => {
    setInterval(() => setTime(timeFormat.format(new Date())), 1000);
  }, []);

  const timeZone = moment
    .tz(new Date(), "Europe/Warsaw")
    .format("z")
    .toLowerCase();

  return (
    <span>
      {timeZone} ∙{" "}
      <span className="text-muted-foreground">{time.toString()}</span>
    </span>
  );
}

export default Clock;
