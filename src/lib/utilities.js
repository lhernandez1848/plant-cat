export const filterClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const capitalizeEachWord = (str) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}