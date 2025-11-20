export const filterClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
}

export const capitalizeEachWord = (str) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}