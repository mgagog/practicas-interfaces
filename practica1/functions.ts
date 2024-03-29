export const getFlagEmoji = (country: string) => {
    const codePoints = country
        .toUpperCase()
        .split('')
        .map(char =>  127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}