export const isValidURL = (url: string): boolean => {
    // const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(:[0-9]{1,5})?(\/.*)?$/;
    const urlPattern = /^(https?:\/\/)/
    return urlPattern.test(url);
};