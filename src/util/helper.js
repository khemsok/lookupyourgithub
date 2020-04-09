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
