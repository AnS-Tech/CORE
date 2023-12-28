export function isEmpty(value) {
  if (typeof value === "undefined") {
    return true;
  }

  if (value === null) {
    return true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }

  return false;
}
