//creates a url queryString from an object
//assumes values are strings
export const queryString = params =>
    Object.entries(params)
        .map(([name, value]) => `${name}=${value}`)
        .join('&');

//generates a random integer from 0 to length-1
export const randomIndex = length => Math.floor(Math.random() * length);

//gets a random item from an array
export const randomItem = arr => {
    if (arr.length) {
        return arr[randomIndex(arr.length)];
    }
};

//gets n random indices
export const randomIndices = (length, num) => {
    const indices = [];
    const max = length < num ? length : num;
    let indicesLeft = Array(length)
        .fill()
        .map((_, i) => i);
    while (indices.length < max) {
        const index = randomIndex(indicesLeft.length);
        indices.push(indicesLeft.splice(index, 1));
    }
    return indices;
};
