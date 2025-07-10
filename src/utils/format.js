export function formatUTCDate(isoString) {
  if (!isoString) return "-";

  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "-"; 

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-GB", {
    month: "long",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${day} ${month} ${year} at ${hours}:${minutes}`;
}
