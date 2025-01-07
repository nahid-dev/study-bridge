import { format, parse } from "date-fns";

export function deferred() {
  let _deferred = {};
  _deferred.promise = new Promise(function (resolve, reject) {
    _deferred.resolve = resolve;
    _deferred.reject = reject;
  });
  return _deferred;
}

export const toggleBodyScroll = (shouldDisable) => {
  if (shouldDisable) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};

export function formatTime(time) {
  const parsedTime = parse(time, "HH:mm:ss", new Date());
  return format(parsedTime, "h:mm a");
}

export function formatDuration(duration = "00:00:00") {
  const [hours, minutes, seconds] = duration.split(":").map(Number);

  let result = "";
  if (hours > 0) result += `${hours}h `;
  if (minutes > 0) result += `${minutes}m `;
  if (seconds > 0) result += `${seconds}s`;

  return result.trim();
}
