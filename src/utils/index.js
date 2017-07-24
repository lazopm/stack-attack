export const queryString = params => Object.entries(params)
    .map(([name, value]) => `${name}=${value}`)
    .join('&');

//gets a random item from an array
export const randomItem = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};
