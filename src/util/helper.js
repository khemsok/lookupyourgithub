import { githubLanguageColor } from "./githubLanguageColor";

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const selectLanguageColor = (language) => {
  if (githubLanguageColor[language]) {
    return githubLanguageColor[language]["color"];
  } else {
    return "#E8274B";
  }
};

export const checkTitleLength = (title) => {
  if (title.length >= 18) {
    return title.substring(0, 18) + "...";
  } else {
    return title;
  }
};

export const checkDescriptionLength = (description) => {
  if (description.length >= 103) {
    return description.substring(0, 103) + "...";
  } else {
    return description;
  }
};
