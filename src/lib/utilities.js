export const filterClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
}
