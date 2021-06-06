export const classNameGenerator = (className) => {
  return className ? ` ${className}` : "";
};

export const getValidObjectValue = (key, obj) => {
  if (typeof obj === "object" && obj !== null) {
    return key in obj ? obj[key] : "";
  }
  return "";
};
