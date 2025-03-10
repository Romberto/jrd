export const isValidURL = (url: string): boolean => {
    const urlPattern = /^(https?:\/\/)/
    return urlPattern.test(url);
};